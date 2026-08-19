import type { TeamStat as TeamStatType } from '@/entities/TeamStat/modal/teamStats';
import S from './TeamStat.module.scss';
import {clsx} from "clsx";

interface TeamStatProps {
    stat: TeamStatType;
    isBlue?: boolean;
}

export const TeamStat = ({ stat, isBlue }: TeamStatProps) => {
    const valueClassName = clsx(
        S.TeamStatValue,
        {
            [S.TeamStatValueBlue]: !isBlue,
            [S.TeamStatValuePurple]: isBlue,
        }
    );
    return (
        <div className={S.TeamStat}>
            <div className={valueClassName}>{stat.value}</div>
            <div className={S.TeamStatLabel}>{stat.label}</div>
        </div>
    );
};