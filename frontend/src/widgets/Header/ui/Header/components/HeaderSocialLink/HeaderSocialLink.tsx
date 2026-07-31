import { SOCIAL_LINKS } from '@/shared/config/navigation';
import { TelegramIcon, MaxIcon, VkIcon } from '@/shared/assets/icons';
import S from './HeaderSocialLink.module.scss';
import Link from "next/link";

const iconMap = {
    telegram: TelegramIcon,
    max: MaxIcon,
    vk: VkIcon,
} as const;

export interface HeaderSocialLinkProps{
    isWhite?: boolean;
}

export const HeaderSocialLink = ({isWhite = false} : HeaderSocialLinkProps) => (
    <div className={S.Socials}>
        {SOCIAL_LINKS.map((social) => {
            const Icon = iconMap[social.icon];
            return (
                <Link key={social.label} href={social.href} className={S.SocialsLink} aria-label={social.label} target="_blank">
                    <Icon isWhite={isWhite} />
                </Link>
            );
        })}
    </div>
);