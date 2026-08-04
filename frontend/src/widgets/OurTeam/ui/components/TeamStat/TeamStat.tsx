import type { TeamStat as TeamStatType } from '@/shared/config/teamStats';
import S from './TeamStat.module.scss';

interface TeamStatProps {
    stat: TeamStatType;
    index: number;
}

export const TeamStat = ({ stat, index }: TeamStatProps) => {
    const blueGradientIndexes = [1, 2];
    const isBlue = blueGradientIndexes.includes(index);
    return (
        <div className={S.TeamStat}>
            <div className={`${S.TeamStatValue} ${!isBlue ? S.TeamStatValueBlue : S.TeamStatValuePurple}`}>{stat.value}</div>
            <div className={S.TeamStatLabel}>{stat.label}</div>
        </div>
    );
};