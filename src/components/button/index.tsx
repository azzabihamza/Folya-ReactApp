import React, { FC } from "react";

interface Props {
    children?: React.ReactNode
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
}

export const Button: FC<Props> = ({ children, className, onClick, disabled=false, type }) => {
    return (
        <button 
            type={type}
            className={className}
            onClick={onClick} 
            disabled={disabled}
        >
            {children}
        </button>
    );
};


