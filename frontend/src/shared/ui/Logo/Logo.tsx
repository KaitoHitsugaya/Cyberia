import Image from "next/image";
import {LogoImage, LogoImageWhite} from "@/shared/assets/images";
import S from "./Logo.module.scss";
import Link from "next/link";

export interface LogoProps {
    className?: string;
    isWhite?: boolean;
}

export const Logo = ({ className = '' , isWhite = false}: LogoProps) => {
    return (
        <Link href="/" className={`${S.Logo} ${className}`}>
            <Image src={isWhite ? LogoImageWhite : LogoImage} alt="Киберия" width={174} height={32}/>
        </Link>
    );
};

