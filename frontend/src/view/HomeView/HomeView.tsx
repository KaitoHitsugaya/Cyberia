import React from 'react';
import S from "./HomeView.module.scss"
import {AwardsSection} from "@/widgets/AwardsSection";
import {ProjectsSection} from "@/widgets/ProjectsSection";
import {OurTeam} from "@/widgets/OurTeam";
import {ReviewsSection} from "@/widgets/ReviewsSection";
import {HeroSection} from "@/widgets/HeroSection";
import {ClientLogos} from "@/widgets/ClientLogos";
import {FeedbackSection} from "@/widgets/FeedbackSection";
import {SearchEmployees} from "@/widgets/SearchEmployees";
import {NewsSection} from "@/widgets/NewsSection";

export const HomeView = () => {
    return (
        <div className={S.HomeView}>
            <div className={S.HomeViewNoGap}>
                <HeroSection/>
                <ClientLogos/>
            </div>
            <AwardsSection/>
            <ProjectsSection isColumnRight/>
            <OurTeam/>
            <ReviewsSection/>
            <FeedbackSection/>
            <NewsSection/>
            <SearchEmployees/>
        </div>
    );
};
