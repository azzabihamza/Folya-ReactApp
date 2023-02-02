import { FC } from "react";

interface InputProps {
    label: string;
    placeholder: string;
    value: string;
    className?: string;
    onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = ({ label, placeholder, value, className, onChange }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <input
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};
