'use client';
import React, { useState, useEffect } from 'react';
import S from './NewsSection.module.scss';
import { PostCard } from "@/entities/Post/ui/PostCard";
import {Button} from "@/shared/ui/Button";
import {stripHtml} from "@/shared/lib/stripHtml";
import {formatDate} from "@/shared/lib/formatDate";

interface Author {
    id: number;
    last_name: string;
    first_name: string;
    image: string;
    positions: string[];
}

interface Tag {
    id: number;
    name: string;
}

interface NewsItem {
    id: number;
    title: string;
    description: string;
    slug: string;
    image_preview: string;
    is_popular: number;
    is_news: number;
    published_at: number;
    authors: Author[];
    tags: Tag[];
}

const MOCK_DATA = {
    "pagination": {
        "page": 1,
        "per_page": 3, // Показываем по 3 на странице
        "last_page": 2,
        "total": 6
    },
    "items": [
        {
            "id": 1,
            "title": "Мы на чемпионате «Профессионалы»!",
            "description": "<p>«Профессионалы» — Всероссийский чемпионат по профмастерству среди студентов СПО, проводится с 13 по 20 февраля при поддержке Министерства просвещения РФ</p>",
            "slug": "culpa-quasi-illum-amet-eos-dolor",
            "image_preview": "http://localhost/storage/posts/f972d86b-6d91-40db-9578-d87a9e8cd482.png",
            "is_popular": 1,
            "is_news": 1,
            "published_at": 1768550400,
            "authors": [],
            "tags": []
        },
        {
            "id": 2,
            "title": "Наш проект стал призёром Tagline Awards 2025",
            "description": "<p>Наш проект Omega-CRM получил призовое место на премии Tagline Awards 2025. Для команды это дебютное участие в одной из ключевых профессиональных наград digital-индустрии — и сразу результат</p>",
            "slug": "nulla-architecto-ut-vitae-consequatur-sit-non-quia",
            "image_preview": "http://localhost/storage/posts/0a7f65a6-5bc4-4cef-a6c3-87331e266fd1.png",
            "is_popular": 0,
            "is_news": 1,
            "published_at": 1768377600,
            "authors": [],
            "tags": []
        },
        {
            "id": 5,
            "title": "5 признаков того, что вашему бизнесу нужны нейросети",
            "description": "<p>Разобрали пять ключевых показателей, по которым можно понять, готов ли бизнес к внедрению нейросетей и какие преимущества это может дать</p>",
            "slug": "quo-occaecati-nam-architecto-unde-non-consequatur",
            "image_preview": "http://localhost/storage/posts/9b415f5e-3c6f-432a-8971-b39aa4301048.png",
            "is_popular": 1,
            "is_news": 0,
            "published_at": 1753268830,
            "authors": [],
            "tags": []
        },
        {
            "id": 6,
            "title": "Внедряем CI/CD в разработку с помощью Gitlab CI",
            "description": "<p>Она позволяет разработчикам сосредоточиться на решении задач, не тратя время на рутинные действия, связанные с деплоем нового функционала или правок</p>",
            "slug": "fuga-rem-aspernatur-ipsum-ad-minus-quos-ea",
            "image_preview": "http://localhost/storage/posts/9b614554-474d-4bef-9f85-28fba09660bd.png",
            "is_popular": 0,
            "is_news": 0,
            "published_at": 1721893579,
            "authors": [],
            "tags": []
        },
        {
            "id": 3,
            "title": "Как развернуть сайт на VDS",
            "description": "<p>Рассказываем основы выбора и настройки сервера для публикации веб-проекта в сети</p>",
            "slug": "aliquam-molestiae-laudantium-atque-quam",
            "image_preview": "http://localhost/storage/posts/226f7858-724b-476e-8af1-d5e5a6622f71.png",
            "is_popular": 0,
            "is_news": 0,
            "published_at": 1715948655,
            "authors": [],
            "tags": []
        },
        {
            "id": 4,
            "title": "Обзор хостингов-2024: наш опыт работы с крупными современными провайдерами",
            "description": "<p>Честный обзор популярных хостингов — с плюсами, минусами и реальными выводами из практики</p>",
            "slug": "pariatur-id-voluptate-impedit",
            "image_preview": "http://localhost/storage/posts/5512f211-510a-49f6-9458-26c1ff5ff269.png",
            "is_popular": 0,
            "is_news": 0,
            "published_at": 1708774269,
            "authors": [],
            "tags": []
        }
    ]
};

export const NewsSection = () => {
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
    const [visibleCount, setVisibleCount] = useState(3);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setNewsItems(MOCK_DATA.items);
    }, []);
    // useEffect(() => {
    //     const fetchNews = async () => {
    //         const response = await fetch('/api/posts');
    //         const data = await response.json();
    //         setNewsItems(data.data.items);
    //     };
    //     fetchNews();
    // }, []);

    const handleLoadMore = () => {
        setLoading(true);
        setVisibleCount(prev => prev + 3);
        setLoading(false);
    };

    const visibleItems = newsItems.slice(0, visibleCount);
    const hasMore = visibleCount < newsItems.length;

    return (
        <div className={S.NewsSection}>
            <div className={S.NewsSectionTitle}>
                Новости
            </div>
            <div className={S.NewsSectionGrid}>
                {visibleItems.map((item) => (
                    <PostCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={stripHtml(item.description)}
                        image={item.image_preview}
                        date={formatDate(item.published_at)}
                        slug={item.slug}
                    />
                ))}
            </div>
            {hasMore && (
                <Button
                    onClick={handleLoadMore}
                    disabled={loading}
                >
                    {loading ? 'Загрузка...' : 'Загрузить ещё'}
                </Button>
            )}
        </div>
    );
};