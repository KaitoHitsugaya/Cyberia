import { SOCIAL_LINKS } from '@/shared/config/navigation';
import S from './HeroSectionSocialLink.module.scss';
import Link from "next/link";
import { iconMap } from "@/shared/lib/iconMap";

export const HeroSectionSocialLink = () => (
    <div className={S.HeroSectionSocialLink}>
        {SOCIAL_LINKS.map((social) => {
            const Icon = iconMap[social.icon];
            return (
                <Link key={social.label} href={social.href} className={S.SocialsLink} aria-label={social.label} target="_blank">
                    <Icon isWhite />
                </Link>
            );
        })}
    </div>
);