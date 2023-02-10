import { FC } from "react";
import  IconSearch  from '../../assets/icons/IconSearch';
import IconBell from "../../assets/icons/IconBell";
import IconFill from "../../assets/icons/IconFill";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
    return (
        <div className="flex flex-row items-center pt-3 pb-5 bg-primary-alt justify-between">
            <h3 className="text-2xl m-0 leading-normal text-info-dark justify-start pl-5">F.</h3>
            <div className="flex flex-row items-center p-1 w-[140px] h-[28px] justify-end pr-5 gap-8">
                <IconSearch />
                <IconBell />
                <IconFill />
            </div>
        </div>
    )
};