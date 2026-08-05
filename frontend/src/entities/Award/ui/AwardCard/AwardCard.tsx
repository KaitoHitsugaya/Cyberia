import type { Award } from '../../model/Award';
import { HandBrownImage, HandGoldImage, HandSilverImage, ScissorsImage, AwardImage } from '@/shared/assets/images';
import { ArrowLink } from "@/shared/assets/icons";
import S from './AwardCard.module.scss';
import Image from "next/image";
import Link from "next/link";

interface AwardCardProps {
    award: Award;
}

const iconMap = {
    handBrown: HandBrownImage,
    handGold: HandGoldImage,
    handSilver: HandSilverImage,
    scissors: ScissorsImage,
    ruward: AwardImage,
} as const;

export const AwardCard = ({ award }: AwardCardProps) => {
    const pathImage = iconMap[award.icon];

    return (
        <div className={S.AwardCard}>
            <div className={S.AwardCardIcon}>
                <Image src={pathImage} alt={'icon'}/>
            </div>
            <div className={S.AwardCardContent}>
                <h3 className={S.AwardCardTitle}>{award.title}</h3>
                <p className={S.AwardCardDescription}>{award.description}</p>
                {award.link && (
                    <Link
                        href={award.link.href}
                        className={S.AwardCardLink}
                    >
                        {award.link.label}<ArrowLink/>
                    </Link>
                )}
            </div>
        </div>
    );
};