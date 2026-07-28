import {
    DveridoffImage,
    GaspromImage,
    IntegraImage,
    ItKitImage,
    KomfortelImage,
    MahhaImage,
    SmartImage,
    ForkargoImage,
} from '@/shared/assets/images';

export const CLIENT_LOGOS = [
    {
        id: 'gasprom',
        name: 'Газпром',
        image: GaspromImage,
    },
    {
        id: 'mahha',
        name: 'Манна',
        image: MahhaImage,
    },
    {
        id: 'it-kit',
        name: 'ИТ-КИТ',
        image: ItKitImage,
    },
    {
        id: 'komfortel',
        name: 'Комфортел',
        image: KomfortelImage,
    },
    {
        id: 'integra',
        name: 'Integra Sources',
        image: IntegraImage,
    },
    {
        id: 'dveridoff',
        name: 'Дверидофф',
        image: DveridoffImage,
    },
    {
        id: 'smart',
        name: 'Smart',
        image: SmartImage,
    },
    {
        id: 'forkargo',
        name: 'Forkargo',
        image: ForkargoImage,
    },
] as const;

export type ClientLogo = typeof CLIENT_LOGOS[number];