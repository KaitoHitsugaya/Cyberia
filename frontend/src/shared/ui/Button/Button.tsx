import S from './Button.module.scss';
//Говно, в первом блоке педдинги не такие, как в ui kit
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
    const baseClass = `${S.Button} ${S[`Button${variant.charAt(0).toUpperCase() + variant.slice(1)}`]} ${disabled ? S.ButtonDisabled : ''} ${className}`;

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