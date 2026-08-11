import type { TeamStat as TeamStatType } from '@/entities/TeamStat/modal/teamStats';
import S from './TeamStat.module.scss';
import {clsx} from "clsx";

interface TeamStatProps {
    stat: TeamStatType;
    isBlue?: boolean;
}

export const TeamStat = ({ stat, isBlue }: TeamStatProps) => {
    return (
        <div className={S.TeamStat}>
            <div className={clsx(
                S.TeamStatValue,
                {
                    [S.TeamStatValueBlue]: !isBlue,
                    [S.TeamStatValuePurple]: isBlue,
                }
            )}>{stat.value}</div>
            <div className={S.TeamStatLabel}>{stat.label}</div>
        </div>
    );
};