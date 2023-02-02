import React, { FC } from "react";

interface Props {
    children?: React.ReactNode
    onClick?: () => void;
    disabled?: boolean;
    bgColor?: string;

}

export const Button: FC<Props> = ({ children, bgColor, onClick, disabled=false }) => {
    return (
        <button 
            type="button"
            className={`bg-${bgColor}-700 text-white font-bold py-2 px-4 rounded`}
            onClick={onClick} 
            disabled={disabled}
        >
            
            {children}
        </button>
    );
};


