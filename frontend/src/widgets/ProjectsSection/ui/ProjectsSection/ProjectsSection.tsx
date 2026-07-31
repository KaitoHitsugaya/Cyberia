"use client"
import React, {useMemo, useState} from 'react';
import {ProjectCategory, PROJECTS_DATA} from "@/entities/Project/model";
import {ProjectCard} from "@/entities/Project";
import {Button} from "@/shared/ui/Button";
import S from './ProjectsSection.module.scss'
import {FilterTabs} from "@/features/FilterProjectsCategory/ui";
import {useProjectFilter} from "@/features/FilterProjectsCategory/model/useProjectFilter";

const INITIAL_PROJECTS_COUNT = 4;

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

    const leftColumn = useMemo(
        () => visibleProjects.filter((_, index) => index % 2 === 0),
        [visibleProjects]
    );

    const rightColumn = useMemo(
        () => visibleProjects.filter((_, index) => index % 2 === 1),
        [visibleProjects]
    );

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 4);
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

