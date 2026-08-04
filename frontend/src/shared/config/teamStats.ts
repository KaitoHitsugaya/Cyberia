export interface TeamStat {
    id: string;
    value: string;
    label: string;
}

export const TEAM_STATS: readonly TeamStat[] = [
    {
        id: '1',
        value: '40',
        label: 'штатных сотрудников: аналитики, дизайнеры, разработчики, тестировщики, девопсы',
    },
    {
        id: '2',
        value: '15',
        label: 'лет — опыт работы топ-менеджеров компании в разработке',
    },
    {
        id: '3',
        value: '5',
        label: 'лет на рынке разработки',
    },
    {
        id: '4',
        value: '90',
        label: 'реализованных проектов',
    },
] as const;