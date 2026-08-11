import React from 'react';
import S from './NewsSection.module.scss'

export const NewsSection = () => {
    return (
        <div className={S.NewsSection}>
            <div className={S.NewsSectionTitle}>
                Новости
            </div>
            <div className={S.NewsSectionGrid}>
                Здесь будут блоки новостей
            </div>
        </div>
    );
};

