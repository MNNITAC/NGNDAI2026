import React, {useState} from 'react';
import {TbLayoutSidebarLeftExpandFilled, TbLayoutSidebarRightExpand} from "react-icons/tb";

const Sidebar = ({activeSection, sectionId}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const isActive = (section) =>  activeSection === section ? 'font-bold underline' : '';

    return (<div
        className={`hidden md:block sticky top-12 left-0 bg-base-100 transition-all max-h-[90dvh] z-10 ${isSidebarOpen ? 'md:w-40' : 'md:w-14'} rounded-sm border-r`}>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="flex h-fit min-w-full justify-end overflow-hidden p-4 text-xl">
            {isSidebarOpen ? <TbLayoutSidebarRightExpand size={24}/> : <TbLayoutSidebarLeftExpandFilled size={24}/>}
        </button>
        {isSidebarOpen && <nav className={`w-full top-12 max-h-full overflow-y-scroll overflow-x-hidden scroll-m-2 `}>
            <ul className="block text-sm capitalize text-nowrap">
                {sectionId.map(sid => <li key={sid}><a href={`#${sid}`} className={` md:block p-2 ${isActive(sid)}`}>{sid}</a></li>)}
            </ul>
        </nav>}
    </div>);
};

export default Sidebar;
