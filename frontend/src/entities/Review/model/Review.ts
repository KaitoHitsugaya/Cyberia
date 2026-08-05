import type { StaticImageData } from 'next/image';

export interface Review {
    id: string;
    projectName: string;
    text: string;
    authorName: string;
    authorPosition: string;
    authorAvatar?: StaticImageData;
}