import Image from 'next/image';
import {
    TeamMainImage,
    TeamTopImage,
    TeamBottomImage, OutTeamSmile, OutTeamFire,
} from '@/shared/assets/images';
import S from './TeamPhotoCollage.module.scss';

export const TeamPhotoCollage = () => {
    return (
        <div className={S.TeamPhotoCollage}>
            <div className={`${S.TeamPhotoCollagePhoto} ${S.TeamPhotoCollagePhotoMain}`}>
                <Image
                    src={TeamMainImage}
                    alt="Член команды Киберии за работой"
                    width={320}
                    height={380}
                />
            </div>

            <div className={`${S.TeamPhotoCollagePhoto} ${S.TeamPhotoCollagePhotoTop}`}>
                <Image
                    src={TeamTopImage}
                    alt="Команда Киберии"
                    width={240}
                    height={180}
                />
            </div>

            <div className={`${S.TeamPhotoCollagePhoto} ${S.TeamPhotoCollagePhotoBottom}`}>
                <Image
                    src={TeamBottomImage}
                    alt="Сотрудник Киберии"
                    width={220}
                    height={280}
                />
            </div>

            <div className={`${S.TeamPhotoCollageEmoji} ${S.TeamPhotoCollageEmojiFire}`}>
                <Image src={OutTeamFire} alt={''}/>
            </div>
            <div className={`${S.TeamPhotoCollageEmoji} ${S.TeamPhotoCollageEmojiSmile}`}>
                <Image src={OutTeamSmile} alt={''}/>
            </div>
        </div>
    );
};