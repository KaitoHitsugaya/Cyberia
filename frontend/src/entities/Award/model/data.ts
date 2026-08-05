import type { Award } from './Award';

export const AWARDS_DATA: readonly Award[] = [
    {
        id: '1',
        icon: 'handSilver',
        title: '30 место по России. Рейтинг Рунета, 2025',
        description: 'Разработка сайтов и веб-сервисов в среднем ценовом сегменте',
    },
    {
        id: '2',
        icon: 'handSilver',
        title: '23 место по России. Рейтинг Рунета, 2025',
        description: 'Разработка решений на базе ИИ',
    },
    {
        id: '3',
        icon: 'handGold',
        title: 'Золото. Рейтинг рунета, 2025',
        description: 'Разработка и интеграция CRM / Барнаул',
    },
    {
        id: '4',
        icon: 'handGold',
        title: 'Золото. Рейтинг рунета, 2025',
        description: 'Разработка интернет-магазинов / Барнаул',
    },
    {
        id: '5',
        icon: 'handGold',
        title: 'Золото. Рейтинг рунета, 2025',
        description: 'Разработка сайтов и веб-сервисов / Барнаул',
    },
    {
        id: '6',
        icon: 'handGold',
        title: 'Золото. Рейтинг рунета, 2025',
        description: 'Разработка решений на базе ИИ / Барнаул',
    },
    {
        id: '7',
        icon: 'scissors',
        title: 'Серебро. Золотой сайт XXVI',
        description: 'Сайт телекоммуникационной компании / Комфортел',
        link: {
            label: 'Комфортел',
            href: 'https://komfortel.ru',
        },
    },
    {
        id: '8',
        icon: 'ruward',
        title: 'Серебро. Ruward Award, 2025',
        description: 'Кейс года / Форкагро',
        link: {
            label: 'Форкагро',
            href: 'https://forkagro.ru',
        },
    },
    {
        id: '9',
        icon: 'handBrown',
        title: 'Бронза. Tagline, 2025',
        description: 'Лучшая разработка / интеграция',
        link: {
            label: 'Форкагро',
            href: 'https://forkagro.ru',
        },
    },
] as const;