import React,{ FC, useState } from "react";

interface Props {
    value: string;
    checked: boolean;
    onChange: (value: string) => void;
    label: string;
}

export const Radio: FC<Props> = ({ value, checked, onChange, label }) => {
    const [isChecked, setIsChecked] = useState(checked);

    return (
        <label className="flex items-center">
            <input
                type="radio"
                checked={isChecked}
                value={value}
                onChange={() => {
                    setIsChecked(!isChecked);
                    onChange(value);
                }}
                className="mr-2"
            />
            <span className="ml-2 text-gray-700" >{label}</span>
        </label>
    );
};