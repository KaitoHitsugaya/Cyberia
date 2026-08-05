import React from 'react';
import S from "./HomeView.module.scss"
import {AwardsSection} from "@/widgets/AwardsSection";
import {ProjectsSection} from "@/widgets/ProjectsSection";
import {OurTeam} from "@/widgets/OurTeam";
import {ReviewsSection} from "@/widgets/ReviewsSection";

export const HomeView = () => {
    return (
        <div className={S.HomeView}>
            <AwardsSection/>
            <ProjectsSection/>
            <OurTeam/>
            <ReviewsSection/>
        </div>
    );
};
