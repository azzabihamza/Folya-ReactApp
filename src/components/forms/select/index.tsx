import { FC, useState } from "react";

interface Props {
    options: Array<{ value: string; label: string }>;
    onChange: (value: string) => void;
    defaultValue?: string;
}

export const Select: FC<Props> = ({ options, onChange, defaultValue }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue || '');

    return (
        <select
            value={selectedValue}
            onChange={(e) => {
                setSelectedValue(e.target.value);
                onChange(e.target.value);
            }}
            className="p-2 border border-gray-400 rounded-lg"
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};
