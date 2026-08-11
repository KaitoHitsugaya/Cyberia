import React from 'react';
import S from './SearchEmployees.module.scss';
import {Button} from "@/shared/ui/Button";
import Link from "next/link";
import Image from "next/image";
import {SearchEmployeesBackground} from '@/shared/assets/icons/SearchEmployeesBackground'
import SearchEmployeesOneImage from '@/shared/assets/images/SearchEmployeesOneImage.png'
import SearchEmployeesTwoImage from '@/shared/assets/images/SearchEmployeesTwoImage.png'

export const SearchEmployees = () => {
    return (
        <div className={S.SearchEmployees}>
            <div className={S.SearchEmployeesBackground}>
                <SearchEmployeesBackground/>
            </div>
            <div className={S.SearchEmployeesContainer}>
                <div className={S.SearchEmployeesContainerBlockCard}>
                    <Image src={SearchEmployeesOneImage} alt={''}/>
                    <Image src={SearchEmployeesTwoImage} alt={''}/>
                </div>
                <div className={S.SearchEmployeesContainerBlock}>
                    <div className={S.SearchEmployeesContainerBlockTitle}>
                        Мы всегда ищем новые таланты в нашу команду
                    </div>
                </div>
                <div className={S.SearchEmployeesContainerBlock}>
                    <div className={S.SearchEmployeesContainerBlockDescription}>
                        Работая в нашей команде, каждый день ты будешь делать и узнавать что-то новое и интересное. Крутые знакомства, долгосрочные проекты и необычные задачи – то, что ждет тебя в Киберии
                    </div>
                    <div className={S.SearchEmployeesContainerBlockRow}>
                        <Button>Присоединяйся</Button>
                        <Link className={S.SearchEmployeesContainerBlockRowLink} href={"https://barnaul.hh.ru/employer/5990391?hhtmFrom=vacancy&tab=VACANCIES"}>Вакансии на hh.ru</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

