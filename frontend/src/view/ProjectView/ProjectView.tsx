import React from 'react';
import S from './ProjectView.module.scss'
import {ProjectsSection} from "@/widgets/ProjectsSection";
import {FeedbackSection} from "@/widgets/FeedbackSection";

export const ProjectView = () => {
    return (
        <div className={S.ProjectView}>
            <ProjectsSection/>
            <FeedbackSection/>
        </div>
    );
};
