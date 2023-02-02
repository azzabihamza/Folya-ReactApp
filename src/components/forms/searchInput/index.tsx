import { FC, useState } from "react";

interface Props {
    onSearch: (value: string) => void;
}

export const SearchInput: FC<Props> = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(searchValue);
    }

    return (
        <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
                type="text"
                value={searchValue}
                onChange={handleSearch}
                placeholder="Search"
                className="w-64 p-2 border border-gray-400 rounded-lg"
            />
            <button type="submit" className="ml-2 py-2 px-4 bg-gray-800 text-white rounded-lg">Search</button>
        </form>
    )
}



