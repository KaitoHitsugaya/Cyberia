import { SOCIAL_LINKS } from '@/shared/config/navigation';
import { TelegramIcon, MaxIcon, VkIcon } from '@/shared/assets/icons';
import S from './HeroSectionSocialLink.module.scss';
import Link from "next/link";

const iconMap = {
    telegram: TelegramIcon,
    max: MaxIcon,
    vk: VkIcon,
} as const;

export const HeroSectionSocialLink = () => (
    <div className={S.HeroSectionSocialLink}>
        {SOCIAL_LINKS.map((social) => {
            const Icon = iconMap[social.icon];
            return (
                <Link key={social.label} href={social.href} className={S.SocialsLink} aria-label={social.label} target="_blank">
                    <Icon />
                </Link>
            );
        })}
    </div>
);