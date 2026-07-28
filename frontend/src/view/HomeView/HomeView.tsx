import React from 'react';
import {Header} from "@/widgets/Header";
import {HeroSection} from "@/widgets/HeroSection";

import S from "./HomeView.module.scss"
import {ClientLogos} from "@/widgets/ClientLogos";
import {AwardsSection} from "@/widgets/AwardsSection";

export const HomeView = () => {
    return (
        <div className={S.HomeView}>
            <div className={S.HomeViewBlock}>
                <Header/>
                <HeroSection/>
                <ClientLogos/>
            </div>
            <main className={S.HomeViewBlock}>
                <AwardsSection/>
            </main>
        </div>
    );
};
