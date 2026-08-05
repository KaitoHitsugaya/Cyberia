'use client'
import {useEffect, useState} from 'react';
import S from "./Header.module.scss"
import {Logo} from "@/shared/ui/Logo";
import {HeaderNavigation} from "@/widgets/Header/ui/Header/components/HeaderNavigation";
import {HeaderSocialLink} from "@/widgets/Header/ui/Header/components/HeaderSocialLink";
import {clsx} from "clsx";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={clsx(S.Header, { [S.HeaderScrolled]: isScrolled })}>
            <div className={S.HeaderContainer}>
                <div className={S.HeaderContainerNav}>
                    <div className={S.HeaderContainerNavBlock}>
                        <Logo className={"Header"} isWhite={isScrolled}/>
                    </div>
                    <div className={S.HeaderContainerNavBlock}>
                        <HeaderNavigation whiteLinks={isScrolled}/>
                    </div>
                    <div className={S.HeaderContainerNavBlock}>
                        <HeaderSocialLink isWhite={isScrolled}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
