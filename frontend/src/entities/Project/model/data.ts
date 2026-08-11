import type { Project } from './Project';
import {HandGoldImage} from "@/shared/assets/images";
import {
    ForkargoProjectImage,
    MahhaProjectImage,
    GaspromProjectImage,
    KomfortelProjectImage,
    CalculatorProjectImage,
} from '@/shared/assets/images';

export const PROJECTS_DATA: Project[] = [
    {
        id: '1',
        title: 'Форкагро',
        description: 'Платформа для развития агробизнеса на национальном и международном рынке',
        image: ForkargoProjectImage,
        category: 'web-services',
        awards: [
            {
                id: '1',
                image: HandGoldImage,
                description: "Рейтинг рунета. Кейс года"
            }
        ],
        link: 'https://forkagro.ru',
    },
    {
        id: '2',
        title: 'Манна Онлайн',
        description: 'Мобильное приложение для заказа доставки товаров на дом из сети гипермаркетов «Манна»',
        image: MahhaProjectImage,
        category: 'ecommerce',
    },
    {
        id: '3',
        title: 'Газпром Карьера',
        description: 'Интерактивная карьерная карта для сотрудников нефтяной компании',
        image: GaspromProjectImage,
        category: 'corporate',
    },
    {
        id: '4',
        title: 'Комфортел',
        description: 'Корпоративный сайт для оператора связи бизнес-класса',
        image: KomfortelProjectImage,
        category: 'corporate',
        awards: [
            {
                id: '1',
                image: HandGoldImage,
                description: "Рейтинг рунета. Кейс года",
            },
            {
                id: '2',
                image: HandGoldImage,
                description: "Рейтинг рунета. Кейс года",
            }
        ],
    },
    {
        id: '5',
        title: 'Калькулятор парикмахера',
        description: 'Веб-платформа с набором инструментов для мастеров бьюти-индустрии',
        image: CalculatorProjectImage,
        category: 'web-services',
    },
] as const;