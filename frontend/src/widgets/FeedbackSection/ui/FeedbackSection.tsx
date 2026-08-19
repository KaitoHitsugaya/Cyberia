import React from 'react';
import S from './FeedbackSection.module.scss'
import Image from "next/image";
import {SOCIAL_LINKS} from "@/shared/config/navigation";
import Link from "next/link";
import FeedbackImage from '@/shared/assets/images/FeedbackImage.png'
import FeedbackArrowImage from '@/shared/assets/images/FeedbackArrowImage.png'
import FeedbackStarImage from '@/shared/assets/images/FeedbackStarImage.png'
import { iconMap } from "@/shared/lib/iconMap";
import {clsx} from "clsx";

export const FeedbackSection = () => {
    return (
        <div className={clsx('container', S.FeedbackSection)}>
            <Image className={S.FeedbackSectionBackground} src={FeedbackStarImage} alt={''}/>
            <div className={S.FeedbackSectionBlock}>
                <Image src={FeedbackImage} alt={''}/>
            </div>
            <div className={S.FeedbackSectionBlock}>
                <div className={S.FeedbackSectionBlockTitle}>
                    Обсудим ваш проект?
                </div>
                <div className={S.FeedbackSectionBlockDescription}>
                    Сформируем четкий план реализации проекта
                    в кратчайшие сроки и в рамках вашего бюджета
                </div>
                <div className={S.FeedbackSectionBlockLinkBlock}>
                    <Image className={S.FeedbackSectionBlockLinkBlockArrow} src={FeedbackArrowImage} alt={''}/>
                    <div className={S.FeedbackSectionBlockLinkBlockText}>
                        Обсудить проект
                    </div>
                    <div className={S.FeedbackSectionBlockLinkBlockText}>
                        {SOCIAL_LINKS.map((social) => {
                            const Icon = iconMap[social.icon];
                            return (
                                <Link key={social.label} href={social.href} className={S.FooterRowColLink} aria-label={social.label} target="_blank">
                                    <Icon isWhite />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

