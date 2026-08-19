import { SOCIAL_LINKS } from '@/shared/config/navigation';
import S from './HeaderSocialLink.module.scss';
import Link from "next/link";
import { iconMap } from "@/shared/lib/iconMap";

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