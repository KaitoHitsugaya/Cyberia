"use client"
import React, {useMemo, useState} from 'react';
import {Project, ProjectCategory, PROJECTS_DATA} from "@/entities/Project/model";
import {ProjectCard} from "@/entities/Project";
import {Button} from "@/shared/ui/Button";
import S from './ProjectsSection.module.scss'
import {FilterTabs} from "@/features/FilterProjectsCategory/ui";
import {useProjectFilter} from "@/features/FilterProjectsCategory/model/useProjectFilter";
import {isEven, isOdd} from "@/shared/lib/math";

const INITIAL_PROJECTS_COUNT = 4;
const LOAD_MORE_STEP = 4;

export const ProjectsSection = () => {
    const {
        selectedCategories,
        filteredProjects,
        handleCategoryToggle,
        handleCategoryRemove,
    } = useProjectFilter(PROJECTS_DATA);

    const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECTS_COUNT);

    const visibleProjects = filteredProjects.slice(0, visibleCount);
    const hasMore = visibleCount < filteredProjects.length;

    const { leftColumn, rightColumn } = useMemo(() => {
        return visibleProjects.reduce(
            (acc, project, index) => {
                if (isEven(index)) {
                    acc.leftColumn.push(project);
                } else {
                    acc.rightColumn.push(project);
                }
                return acc;
            },
            { leftColumn: [] as Project[], rightColumn: [] as Project[] }
        );
    }, [visibleProjects]);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + LOAD_MORE_STEP);
    };

    const handleCategoryToggleWithReset = (category: ProjectCategory) => {
        handleCategoryToggle(category);
        setVisibleCount(INITIAL_PROJECTS_COUNT);
    };

    const handleCategoryRemoveWithReset = (category: ProjectCategory) => {
        handleCategoryRemove(category);
        setVisibleCount(INITIAL_PROJECTS_COUNT);
    };



    return (
        <section className={S.ProjectsSection}>
            <div className={S.ProjectsSectionContainer}>
                <h2 className={S.ProjectsSectionTitle}>Наши проекты</h2>

                <FilterTabs
                    selectedCategories={selectedCategories}
                    onCategoryToggle={handleCategoryToggleWithReset}
                    onCategoryRemove={handleCategoryRemoveWithReset}
                />

                <div className={S.ProjectsSectionGrid}>
                    <div className={S.ProjectsSectionColumn}>
                        {leftColumn.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    <div className={S.ProjectsSectionColumnRight}>
                        {rightColumn.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>

                {hasMore && (
                    <div className={S.ProjectsSectionLoadMore}>
                        <Button variant="dark" onClick={handleLoadMore}>
                            Загрузить еще
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

