export interface Award {
    id: string;
    icon: 'handGold' | 'handSilver' | 'handBrown' | 'scissors' | 'ruward';
    title: string;
    description: string;
    link?: {
        label: string;
        href: string;
    };
}