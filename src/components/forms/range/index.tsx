import React,{ FC, useState } from "react";

interface Props {
    value: number;
    onChange: (value: number) => void;
    label?: string;
    min: number;
    max: number;

}

export const Range: FC<Props> = ({ value, onChange, label, min, max }) => {
    const [rangeValue, setRangeValue] = useState(value);

    return (
        <div className="my-4">
            {label && <label className="block text-gray-700 font-medium mb-2">{label}</label>}
            <input
                type="range"
                id={label}
                value={rangeValue}
                onChange={(e) => {
                    setRangeValue(Number(e.target.value));
                    onChange(Number(e.target.value));
                }}
                min={min}
                max={max}
                className="w-full form-range"
            />
        </div>
    );
};