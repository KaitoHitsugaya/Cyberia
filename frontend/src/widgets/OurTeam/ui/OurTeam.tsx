import { Button } from '@/shared/ui/Button';
import { TEAM_STATS } from '@/shared/config/teamStats';
import { TeamStat } from './components/TeamStat';
import { TeamPhotoCollage } from './components/TeamPhotoCollage';
import S from './OurTeam.module.scss';

export const OurTeam = () => {
    return (
        <section className={S.OurTeam}>
            <div className={S.OurTeamContainer}>
                <div className={S.OurTeamContent}>
                    <h2 className={S.OurTeamTitle}>Наша команда</h2>

                    <p className={S.OurTeamDescription}>
                        Благодаря многолетнему опыту мы гибко используем современные
                        методологии разработки — Scrum, Agile, Lean, Kanban, применяя
                        и адаптируя их под нужды проекта
                    </p>

                    <div className={S.OurTeamButton}>
                        <Button variant="dark" as="a" href="/about">
                            Подробнее
                        </Button>
                    </div>

                    <div className={S.OurTeamStats}>
                        {TEAM_STATS.map((stat, index) => (
                            <TeamStat key={stat.id} stat={stat} index={index} />
                        ))}
                    </div>
                </div>

                <div className={S.OurTeamPhotos}>
                    <TeamPhotoCollage />
                </div>
            </div>
        </section>
    );
};