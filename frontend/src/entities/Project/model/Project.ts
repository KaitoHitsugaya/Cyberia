import {StaticImageData} from "next/image";

export interface Project {
    id: string;
    title: string;
    description: string;
    image: StaticImageData;
    category: ProjectCategory;
    awards?: Award[];
    link?: string;
}
export interface Award{
    id: string;
    image: StaticImageData;
    description: string;
}

export const PROJECT_CATEGORIES = {
    'web-services': 'Веб-сервисы',
    'crm': 'CRM-системы',
    'ecommerce': 'Интернет-магазины',
    'corporate': 'Корпоративные сайты',
    'aggregators': 'Агрегаторы, маркетплейсы',
    'logistics': 'Логистические сервисы',
} as const;

export type ProjectCategory = keyof typeof PROJECT_CATEGORIES;