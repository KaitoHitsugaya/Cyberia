import S from "./HeroSection.module.scss"
import {Button} from "@/shared/ui/Button";
import Image from "next/image";
import {BackgroundOneImage, BackgroundTwoImage, HeroSectionImage} from "@/shared/assets/images"
import {HeroSectionSocialLink} from "@/widgets/HeroSection/ui/HeroSection/components/HeroSectionSocialLink";

export const HeroSection = () => {
    return (
        <div className={S.HeroSection}>
            <div className={S.HeroSectionBackground}>
                <Image className={S.HeroSectionBackgroundPeople} src={HeroSectionImage} alt={"Участники команды"}/>
                <Image className={S.HeroSectionBackgroundStarOne} src={BackgroundOneImage} alt={""}/>
                <Image className={S.HeroSectionBackgroundStarTwo} src={BackgroundTwoImage} alt={""}/>
            </div>
            <div className={S.HeroSectionContainer}>
                <div className={S.HeroSectionContainerBlock}>
                    <h1 className={S.HeroSectionContainerBlockTitle}>Разрабатываем сложные ITпродукты: е-ком, веб-сервисы, ИИ</h1>
                </div>
                <div className={S.HeroSectionContainerBlock}>
                    <div className={S.HeroSectionContainerBlockBackround}>
                        <div className={S.HeroSectionContainerBlockBackroundTitle}>
                            23 место
                        </div>
                        <div className={S.HeroSectionContainerBlockBackroundText}>
                            Разработка решений на базе ИИ
                        </div>
                    </div>
                    <div className={S.HeroSectionContainerBlockContent}>
                        <Button variant={"dark"} as={"a"}>Обсудить проект</Button>
                    </div>
                    <div className={S.HeroSectionContainerBlockContent}>
                        <HeroSectionSocialLink/>
                    </div>

                </div>
            </div>
        </div>
    );
};

