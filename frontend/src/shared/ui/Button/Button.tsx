import { clsx } from 'clsx';
import S from './Button.module.scss';
export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'dark' | 'outline';
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
    as?: 'button' | 'a';
    href?: string;
}

export const Button = ({children, variant = 'primary', disabled = false, onClick, className = '', as = 'button', href,
                       }: ButtonProps) => {
    const baseClass = clsx(
        S.Button,
        S[`Button${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
        {
            [S.ButtonDisabled]: disabled,
        },
        className
    );

    if (as === 'a' && href) {
        return (
            <a href={href} className={baseClass}>
                {children}
            </a>
        );
    }

    return (
        <button
            type="button"
            className={baseClass}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};