import React,{ FC, useState } from "react";

interface Props {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
}

export const Checkbox: FC<Props> = ({ checked, onChange, label }) => {
    const [isChecked, setIsChecked] = useState(checked);

    return (
        <label className="flex items-center">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => {
                    setIsChecked(!isChecked);
                    onChange(!isChecked);
                }}
                className="mr-2"
            />
            {label && <span className="ml-2 text-gray-700" >{label}</span> }
        </label>
    );
};