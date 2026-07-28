import { AwardCard } from '@/entities/Award/ui/AwardCard';
import { AWARDS_DATA } from '@/entities/Award/model';
import S from './AwardsSection.module.scss';

export const AwardsSection = () => {
    return (
        <section className={S.AwardsSection}>
            <div className={S.AwardsSectionContainer}>
                <h2 className={S.AwardsSectionTitle}>Награды студии</h2>
                <div className={S.AwardsSectionGrid}>
                    {AWARDS_DATA.map((award) => (
                        <AwardCard key={award.id} award={award} />
                    ))}
                </div>
            </div>
        </section>
    );
};