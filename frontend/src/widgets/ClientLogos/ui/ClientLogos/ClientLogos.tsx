import S from './ClientLogos.module.scss';
import { CLIENT_LOGOS } from '@/shared/config/clientLogos';
import Image from 'next/image';

export const ClientLogos = () => {
    return (
        <div className={S.ClientLogos}>
            {CLIENT_LOGOS.map((company) => (
                <div key={company.id} className={S.ClientLogosItem}>
                    <Image
                        src={company.image}
                        alt={company.name}
                        className={S.ClientLogosImage}
                    />
                </div>
            ))}
        </div>
    );
};

