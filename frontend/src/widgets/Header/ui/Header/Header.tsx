'use client'
import {useState} from 'react';
import S from "./Header.module.scss"
import {Logo} from "@/shared/ui/Logo";
import {HeaderNavigation} from "@/widgets/Header/ui/Header/components/HeaderNavigation";
import {HeaderSocialLink} from "@/widgets/Header/ui/Header/components/HeaderSocialLink";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className={S.Header}>
            <div className={S.HeaderContainer}>
                <div className={S.HeaderContainerNav}>
                    <div className={S.HeaderContainerNavBlock}>
                        <Logo className={"Header"}/>
                    </div>
                    <div className={S.HeaderContainerNavBlock}>
                        <HeaderNavigation/>
                    </div>
                    <div className={S.HeaderContainerNavBlock}>
                        <HeaderSocialLink/>
                    </div>
                </div>
            </div>
        </header>
    );
};
