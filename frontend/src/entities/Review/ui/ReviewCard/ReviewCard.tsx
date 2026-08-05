import Image from 'next/image';
import type { Review } from '../../model/Review';
import { DocumentIcon } from '@/shared/assets/icons/DocumentIcon';
import { UserIcon } from '@/shared/assets/icons/UserIcon';
import S from './ReviewCard.module.scss';

interface ReviewCardProps {
    review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
    return (
        <div className={S.ReviewCard}>
            <div className={S.ReviewCardBackground}>

            </div>
            <div className={S.ReviewCardHeader}>
                <div className={S.ReviewCardProjectName}>
                    {review.projectName}
                </div>
                <div className={S.ReviewCardIcon}>
                    <DocumentIcon />
                </div>
            </div>
            <div className={S.ReviewCardContent}>
                <p className={S.ReviewCardText}>
                    {review.text}
                </p>
                <div className={S.ReviewCardAuthor}>
                    <div className={S.ReviewCardAvatar}>
                        {review.authorAvatar ? (
                            <Image src={review.authorAvatar} alt={review.authorName} width={40} height={40}/>
                        ) : (
                            <UserIcon />
                        )}
                    </div>
                    <div className={S.ReviewCardAuthorInfo}>
                        <div className={S.ReviewCardAuthorName}>
                            {review.authorName}
                        </div>
                        <div className={S.ReviewCardAuthorPosition}>
                            {review.authorPosition}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};