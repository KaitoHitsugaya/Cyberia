import S from './ClientLogos.module.scss';
import { CLIENT_LOGOS } from '@/shared/config/clientLogos';
import Image from 'next/image';

const ALL_LOGOS = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

export const ClientLogos = () => {
    return (
        <div className={S.ClientLogos}>
            <div className={S.ClientLogosTrack}>
                {ALL_LOGOS.map((company, index) => (
                    <div key={index} className={S.ClientLogosItem}>
                        <Image
                            src={company.image}
                            alt={company.name}
                            className={S.ClientLogosImage}
                            width={120}
                            height={40}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

