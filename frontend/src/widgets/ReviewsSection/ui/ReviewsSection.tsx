'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { ReviewCard } from '@/entities/Review/ui/ReviewCard';
import { REVIEWS_DATA } from '@/entities/Review/model';
import { ArrowIcon } from '@/shared/assets/icons/ArrowIcon';
import S from './ReviewsSection.module.scss';

export const ReviewsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);
    const [containerWidth, setContainerWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                setCardsPerView(3);
            } else if (window.innerWidth >= 768) {
                setCardsPerView(2);
            } else {
                setCardsPerView(1);
            }

            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalDots = REVIEWS_DATA.length - 1;
    const maxIndex = REVIEWS_DATA.length - 1;

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex - 1));
    }, [maxIndex]);

    const goToPrev = useCallback(() => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }, []);

    const goToSlide = useCallback((index: number) => {
        setCurrentIndex(index);
    }, []);

    const cardWidth = 480 + 20;
    const cardActualWidth = 480;

    const maxOffset = Math.max(
        0,
        (REVIEWS_DATA.length - 1) * cardWidth + cardActualWidth - containerWidth
    );

    const targetOffset = currentIndex * cardWidth;
    const offset = Math.min(targetOffset, maxOffset);

    return (
        <section className={S.ReviewsSection}>
            <div className={S.ReviewsSectionContainer}>
                <h2 className={S.ReviewsSectionTitle}>Нам доверяют</h2>

                <div className={S.ReviewsSectionCarousel} ref={containerRef}>
                    <div
                        className={S.ReviewsSectionTrack}
                        style={{
                            transform: `translate3d(-${offset}px, 0, 0)`,
                            transition: 'transform 0.5s ease',
                            willChange: 'transform',
                        }}>
                        {REVIEWS_DATA.map((review) => (
                            <ReviewCard key={review.id} review={review} />
                        ))}
                    </div>
                </div>

                <div className={S.ReviewsSectionControls}>
                    <button
                        type="button" className={S.ReviewsSectionButton} onClick={goToPrev} disabled={currentIndex === 0}>
                        <ArrowIcon direction="left" />
                    </button>

                    <div className={S.ReviewsSectionDots}>
                        {Array.from({ length: totalDots }).map((_, index) => {
                            const distance = Math.abs(index - currentIndex);
                            const isActive = index === currentIndex;
                            const isNeighbor = distance === 1;

                            return (
                                <button key={index} type="button"
                                    className={`${S.ReviewsSectionDot} ${
                                        isActive ? S.ReviewsSectionDotActive : ''
                                    } ${isNeighbor ? S.ReviewsSectionDotNeighbor : ''}`} onClick={() => goToSlide(index)}/>
                            );
                        })}
                    </div>

                    <button
                        type="button" className={S.ReviewsSectionButton} onClick={goToNext} disabled={currentIndex === maxIndex - 1}>
                        <ArrowIcon direction="right" />
                    </button>
                </div>
            </div>
        </section>
    );
};