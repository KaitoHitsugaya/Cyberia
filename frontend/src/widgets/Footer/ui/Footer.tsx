import React from 'react';
import S from './Footer.module.scss'
import Image from "next/image";
import Logo from '@/shared/assets/images/LogoImage.png'
import {PAGES, SOCIAL_LINKS} from "@/shared/config/navigation";
import Link from "next/link";
import {MaxIcon, TelegramIcon, VkIcon} from "@/shared/assets/icons";
const iconMap = {
    telegram: TelegramIcon,
    max: MaxIcon,
    vk: VkIcon,
} as const;
import itemsFooter from '@/shared/assets/images/ItemsFooter.png'

export const Footer = () => {
    return (
        <footer className={S.Footer}>
            <div className={S.FooterRow}>
                <div className={S.FooterRowCol}>
                    <Image src={Logo} alt={''}/>
                </div>
                <div className={S.FooterRowCol}>
                    {PAGES.map((link) => {
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`${S.FooterRowColLink}`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
                <div className={S.FooterRowCol}>
                    <div className={`${S.FooterRowColSubCol} ${S.FooterRowColSubColTitle}`}>
                        +7 960 959 18 66
                    </div>
                    <div className={`${S.FooterRowColSubCol} ${S.FooterRowColSubColTitle}`}>
                        hello@cyberia.studio
                    </div>
                    <div className={S.FooterRowColSubCol}>
                        г.Барнаул, ул.Ярных, 35, оф.10
                    </div>
                    <div className={S.FooterRowColSubCol}>
                        {SOCIAL_LINKS.map((social) => {
                            const Icon = iconMap[social.icon];
                            return (
                                <Link key={social.label} href={social.href} className={S.FooterRowColLink} aria-label={social.label} target="_blank">
                                    <Icon />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={S.FooterRow}>
                <div className={S.FooterRowCol}>
                    <span>© 2026 ООО «Киберия», номер в реестре</span><span>аккредитованных IT-компаний: 53278</span>
                </div>
                <div className={S.FooterRowCol}>
                    Реквизиты компании
                </div>
                <div className={S.FooterRowCol}>
                    Политика конфиденциальности
                </div>
            </div>
            <div className={S.FooterRow}>
                <Image className={S.FooterItems} src={itemsFooter} alt={''}/>
            </div>
        </footer>
    );
};

