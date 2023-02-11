import { FC, useState } from "react";
import ArrowAngleRight from "../../assets/icons/ArrowAngleRight";
import IconUser  from "../../assets/icons/IconUser";
import IconBadge from "../../assets/icons/IconBadge";
import IconCalendar from "../../assets/icons/IconCalendar";
import IconNoteBook from "../../assets/icons/IconNoteBook";
import IconEnvelope from "../../assets/icons/IconEnvelope";
import IconCross from "../../assets/icons/IconCross";
import IconLabel from "../../assets/icons/IconLabel";
import IconHomeLocation from "../../assets/icons/IconHomeLocation";
import IconSettingsSliders from "../../assets/icons/IconSettingsSliders";
import IconLogout from "../../assets/icons/IconLogout";



interface SideBarProps {}


export const SideBar: FC<SideBarProps> = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isOpen ? "w-16" : "w-60"
      } h-screen border-r-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] duration-400`}
    >
      <div className="flex flex-col pt-5">
        <button onClick={toggleSideBar} className={` ${isOpen ? "justify-start" : "justify-end" }  pt-2 pb-8 px-4 cursor-pointer grid  `} >
            {!isOpen ? 
                <IconCross /> 
            : 
                <ArrowAngleRight />
            }
          
        </button>

        <div className="flex items-center pb-6 gap-4">
            <ul className="py-3 px-4">
                <li 
                    className="flex cursor-pointer py-3"
                >    
                       <IconUser />
                    <span className={`${isOpen && "hidden" } pl-7 py-0.5 text-s text-gray-main origin-left duration-200 `}>Mon profile</span>
                </li>
                <li
                    className="flex cursor-pointer py-3"
                >
                    <IconBadge />
                    <span className={`${isOpen && "hidden" } pl-7 py-0.5 text-s text-gray-main origin-left duration-200 `}>Liste des patients</span>
                </li>
                <li
                    className="flex cursor-pointer py-3"
                >
                    <IconNoteBook />
                    <span className={`${isOpen && "hidden" } pl-7 py-0.5 text-s text-gray-main origin-left duration-200 `}>Mes notes</span>
                </li>
                <li
                    className="flex cursor-pointer py-3"
                >
                    <IconEnvelope />
                    <span className={`${isOpen && "hidden" } pl-7 py-0.5 text-s text-gray-main origin-left duration-200 `}>Mes messages</span>
                </li>
                <li
                    className="flex cursor-pointer py-3"
                >
                    <IconCalendar />
                    <span className={`${isOpen && "hidden" } pl-7 py-0.5 text-s text-gray-main origin-left duration-200 `}>Mon calendrier</span>
                </li>
            </ul> 

        </div>
        <div className={`${isOpen? "w-10" : "w-52" } border-t-2 border-solid border-[#E4E4E4] mx-3 `} />
        <div className="flex items-center pb-20 gap-4">
            <ul className="py-3 px-4">
                <li
                    className="flex cursor-pointer py-3"
                >
                    <IconLabel />
                    <span className={`${isOpen && "hidden" } pl-7 py-0.5 text-s text-gray-main origin-left duration-200 `}>Ressources</span>
                </li>
                <li
                    className="flex cursor-pointer py-3"
                >
                    <IconHomeLocation />
                    <span className={`${isOpen && "hidden" } pl-7 py-0.5 text-s text-gray-main origin-left duration-200 `}>Le cabinet</span>
                </li>
            </ul>
        </div>

        <div className={`${isOpen? "w-10" : "w-52" } border-t-2 border-solid border-[#E4E4E4] mx-3 `} />
        <div className="flex items-center pt-2 gap-4">
            <ul className="py-3 px-4">
                <li
                    className="flex cursor-pointer py-3"
                >
                    <IconSettingsSliders />
                    <span className={`${isOpen && "hidden" } pl-7 py-0.5 text-s text-gray-main origin-left duration-200 `}>Paramètres</span>
                </li>
                <li
                    className="flex cursor-pointer py-3"
                >
                    <IconLogout />
                    <span className={`${isOpen && "hidden" } pl-7 py-0.5 text-s text-gray-main origin-left duration-200 `}>Déconnection</span>
                </li>
            </ul>
        </div>

      </div>
        
    </div>
  );
};
