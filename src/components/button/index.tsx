import React, { FC } from "react";
import './styles.module.scss';

interface Props {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
}

const Button: FC<Props> = ({ label, onClick , disabled=false , variant = 'primary' }) => {
    return (
        <button className={`btn btn-${variant} py-2 px-4 rounded bg-green-500 hover:bg-green-600 focus:outline-none ring-opacity-75 ring-green-400 focus:ring text-white text-lg`} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

export default Button;
