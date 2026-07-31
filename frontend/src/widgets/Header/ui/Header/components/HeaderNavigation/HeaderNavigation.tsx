'use client';

import { usePathname } from 'next/navigation';
import { PAGES } from '@/shared/config/navigation';
import S from './HeaderNavigation.module.scss';
import Link from "next/link";

export interface HeaderNavigationProps{
    whiteLinks?: boolean;
}

export const HeaderNavigation = ({whiteLinks = false} : HeaderNavigationProps) => {
    const pathname = usePathname();

    return (
        <nav className={S.Navigation}>
            {PAGES.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`${S.NavigationLink} ${isActive ? S.NavigationLinkActive : ''} ${whiteLinks ? S.NavigationLinkWhite : ''}`}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </nav>
    );
};