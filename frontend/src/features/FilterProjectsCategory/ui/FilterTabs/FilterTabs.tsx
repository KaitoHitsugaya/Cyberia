'use client';

import { PROJECT_CATEGORIES, type ProjectCategory } from '@/entities/Project/model/types';
import { CloseIcon } from '@/shared/assets/icons/CloseIcon';
import S from './FilterTabs.module.scss';
import {useDragScroll} from "@/shared/lib/useDragScroll";

interface FilterTabsProps {
    selectedCategories: readonly ProjectCategory[];
    onCategoryToggle: (category: ProjectCategory) => void;
    onCategoryRemove: (category: ProjectCategory) => void;
}

export const FilterTabs = ({selectedCategories, onCategoryToggle, onCategoryRemove,}: FilterTabsProps) => {
    const scrollRef = useDragScroll();
    const isActive = (category: ProjectCategory) => selectedCategories.includes(category);
    const actionButton= (active: boolean, category: ProjectCategory) => {
        if(active){
            onCategoryRemove(category);
        }else{
            onCategoryToggle(category);
        }
    }

    return (
        <div className={S.FilterTabs} ref={scrollRef}>
            {Object.entries(PROJECT_CATEGORIES).map(([key, label]) => {
                const category = key as ProjectCategory;
                const active = isActive(category);

                return (
                    <button key={key} type="button" className={`${S.FilterTabsTab} ${active ? S.FilterTabsTabActive : ''}`} onMouseDown={(e) => e.preventDefault()} onClick={() => actionButton(active, category)}>
                        <span>{label}</span>
                        {active && (
                            <span className={S.FilterTabsTabClose} onClick={(e) => {
                                    e.stopPropagation();
                                    actionButton(active, category);
                                }}>
                                <CloseIcon />
                            </span>
                        )}
                    </button>
                );
            })}
        </div>
    );
};