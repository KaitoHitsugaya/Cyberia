'use client';

import { useState, useMemo } from 'react';
import type { Project, ProjectCategory } from '@/entities/Project/model/types';

interface UseProjectFilterReturn {
    selectedCategories: readonly ProjectCategory[];
    filteredProjects: readonly Project[];
    handleCategoryToggle: (category: ProjectCategory) => void;
    handleCategoryRemove: (category: ProjectCategory) => void;
    handleClearAll: () => void;
}

export const useProjectFilter = (projects: readonly Project[]): UseProjectFilterReturn => {
    const [selectedCategories, setSelectedCategories] = useState<readonly ProjectCategory[]>([]);

    const filteredProjects = useMemo(() => {
        if (selectedCategories.length === 0) {
            return projects;
        }
        return projects.filter((project) =>
            selectedCategories.includes(project.category)
        );
    }, [projects, selectedCategories]);

    const handleCategoryToggle = (category: ProjectCategory) => {
        setSelectedCategories((prev) => {
            if (prev.includes(category)) {
                return prev; // Уже есть - не добавляем
            }
            return [...prev, category];
        });
    };

    const handleCategoryRemove = (category: ProjectCategory) => {
        setSelectedCategories((prev) => prev.filter((c) => c !== category));
    };

    const handleClearAll = () => {
        setSelectedCategories([]);
    };

    return {
        selectedCategories,
        filteredProjects,
        handleCategoryToggle,
        handleCategoryRemove,
        handleClearAll,
    };
};