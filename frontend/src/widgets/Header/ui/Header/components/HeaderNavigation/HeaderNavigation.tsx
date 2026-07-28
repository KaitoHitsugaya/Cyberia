'use client';

import { usePathname } from 'next/navigation';
import { NAVIGATION_LINKS } from '@/shared/config/navigation';
import S from './HeaderNavigation.module.scss';
import Link from "next/link";

export const HeaderNavigation = () => {
    const pathname = usePathname();

    return (
        <nav className={S.Navigation}>
            {NAVIGATION_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`${S.NavigationLink} ${isActive ? S.NavigationLinkActive : ''}`}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </nav>
    );
};