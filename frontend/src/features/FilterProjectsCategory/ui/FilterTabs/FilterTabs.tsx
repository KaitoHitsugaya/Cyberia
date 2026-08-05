'use client';

import { PROJECT_CATEGORIES, type ProjectCategory } from '@/entities/Project/model/Project';
import { CloseIcon } from '@/shared/assets/icons/CloseIcon';
import S from './FilterTabs.module.scss';
import {useDragScroll} from "@/shared/lib/useDragScroll";
import {clsx} from "clsx";

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
    const handleTabClick = (category: ProjectCategory, active: boolean) => {
        actionButton(active, category);
    };

    const handleCloseClick = (e: React.MouseEvent, category: ProjectCategory, active: boolean) => {
        e.stopPropagation();
        actionButton(active, category);
    };
    return (
        <div className={S.FilterTabs} ref={scrollRef}>
            {Object.entries(PROJECT_CATEGORIES).map(([key, label]) => {
                const category = key as ProjectCategory;
                const active = isActive(category);

                return (
                    <button key={key} type="button" className={clsx(S.FilterTabsTab, {[S.FilterTabsTabActive]: active,})} onMouseDown={(e) => e.preventDefault()} onClick={() => handleTabClick(category, active)}>
                        <span>{label}</span>
                        {active && (
                            <span className={S.FilterTabsTabClose} onClick={(e) => {handleCloseClick(e, category, active)}}>
                                <CloseIcon />
                            </span>
                        )}
                    </button>
                );
            })}
        </div>
    );
};