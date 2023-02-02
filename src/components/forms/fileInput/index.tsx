import React,{ FC, useState } from "react";

interface Props {
    onChange: (file: File) => void;
}

export const FileInput: FC<Props> = ({ onChange }) => {
    const [fileName, setFileName] = useState<string>("");

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);
            onChange(file);
        }
    };

    return (
        <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M12 9v3h3l-5 5-5-5h3V9H3l5-5 5 5h-3z" />
                </svg>
                <span className="mt-2 text-base leading-normal">
                    Select a file
                </span>
                <input
                    type="file"
                    className="hidden"
                    onChange={onChangeHandler}
                />
            </label>
            <p className="ml-2">{fileName}</p>
        </div>
    );
};