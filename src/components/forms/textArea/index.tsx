import React,{ FC, useState } from "react";

interface Props {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    rows?: number;
}

export const TextArea: FC<Props> = ({ value, onChange, placeholder, rows }) => {
    
    return (
        <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500"
            placeholder={placeholder}
            rows={rows}
        />
    );
};