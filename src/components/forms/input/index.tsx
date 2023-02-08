import { FC } from "react";

interface InputProps {
    label: string;
    id?: string;
    type?: string;
    placeholder: string;
    value: string;
    className?: string;
    ref?: any;
    required?: boolean;
    autoComplete?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({ label, id, type, placeholder, value, className, onChange, ref, required, autoComplete }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <input
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                ref={ref}
                required={required}
                autoComplete={autoComplete}
                onChange={onChange}
            />
        </div>
    );
};
