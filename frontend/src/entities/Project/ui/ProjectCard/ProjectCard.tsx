import React from 'react';
import {Project} from "@/entities/Project/model";
import S from './ProjectCard.module.scss'
import Image from "next/image";
import {ArrowLink} from "@/shared/assets/icons";
import Link from "next/link";

interface ProjectCardProps{
    project: Project;
}

export const ProjectCard = ({project} : ProjectCardProps) => {
    return (
        <div className={S.ProjectCard}>
            <div className={S.ProjectCardBlock}>
                <Image src={project.image} alt={project.title}/>
                <div className={S.ProjectCardAwards}>
                    {project.awards?.map((award)=> (
                        <div key={award.id} className={S.ProjectCardAward}>
                            <Image src={award.image} alt={''}/>
                            <div className={S.ProjectCardAwardText}>{award.description}</div>
                        </div>
                    ))}
                </div>
                {project.link && (
                    <Link
                        href={project.link}
                        className={S.ProjectCardLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Перейти к проекту ${project.title}`}
                    >
                        <ArrowLink isWhite={true}/>
                    </Link>
                )}
            </div>
            <div className={S.ProjectCardBlock}>
                <div className={S.ProjectCardBlockTitle}>
                    {project.title}
                </div>
                <div className={S.ProjectCardBlockDescription}>
                    {project.description}
                </div>
            </div>
        </div>
    );
};

