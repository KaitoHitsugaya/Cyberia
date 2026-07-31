import React from 'react';
import {Header} from "@/widgets/Header";
import {HeroSection} from "@/widgets/HeroSection";

import S from "./HomeView.module.scss"
import {ClientLogos} from "@/widgets/ClientLogos";
import {AwardsSection} from "@/widgets/AwardsSection";
import {ProjectsSection} from "@/widgets/ProjectsSection";

export const HomeView = () => {
    return (
        <div className={S.HomeView}>
            <Header/>
            <div className={S.HomeViewBlock}>
                <HeroSection/>
                <ClientLogos/>
            </div>
            <main className={S.HomeViewBlock}>
                <AwardsSection/>
            </main>
            <section className={S.HomeViewBlock}>
                <ProjectsSection/>
            </section>
        </div>
    );
};
