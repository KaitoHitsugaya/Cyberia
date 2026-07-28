import Image from "next/image";
import {LogoImage} from "@/shared/assets/images";
import S from "./Logo.module.scss";
import Link from "next/link";

export interface LogoProps {
    className?: string;
}

export const Logo = ({ className = '' }: LogoProps) => {
    return (
        <Link href="/" className={`${S.Logo} ${className}`}>
            <Image src={LogoImage} alt="Киберия" width={174} height={32}/>
        </Link>
    );
};

