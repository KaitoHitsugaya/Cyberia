interface ArrowIconProps {
    direction?: 'left' | 'right';
}

export const ArrowIcon = ({ direction = 'right' }: ArrowIconProps) => {
    const isLeft = direction === 'left';

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: isLeft ? 'rotate(180deg)' : 'none' }}>
            <path d="M8.9125 21.1125C8.42235 21.6027 7.62765 21.6027 7.1375 21.1125C6.64735 20.6223 6.64735 19.8277 7.1375 19.3375L14.475 12L7.1375 4.6625C6.64735 4.17235 6.64735 3.37765 7.1375 2.8875C7.62765 2.39735 8.42235 2.39735 8.9125 2.8875L17.2407 11.2157C17.6739 11.6489 17.6739 12.3511 17.2407 12.7843L8.9125 21.1125Z" fill="#0B0D20"/>
        </svg>
    );
};