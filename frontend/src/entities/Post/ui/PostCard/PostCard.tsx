'use client';
import React from 'react';
import S from './PostCard.module.scss';
import Image from "next/image";
import { CalendarIcon } from '@/shared/assets/icons/CalendarIcon';
import Link from "next/link";

export interface PostCardProps {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    slug: string;
}

export const PostCard = ({id, title, description, image, date, slug}: PostCardProps) => {
    return (
        <Link href={`/news/${slug}`} className={S.PostCardLink}>
            <div className={S.PostCard}>
                <div className={S.PostCardImage}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className={S.PostCardContent}>
                    <div className={S.PostCardContentTitle}>
                        {title}
                    </div>
                    <div className={S.PostCardContentDescription}>
                        {description}
                    </div>
                </div>
                <div className={S.PostCardDate}>
                    <CalendarIcon />
                    {date}
                </div>
            </div>
        </Link>
    );
};