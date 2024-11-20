import { useState } from "react";
import { SidebarData } from "./SidebarData";
import {  NavLink } from "react-router-dom";

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const activeLinkClass = "bg-primary text-white";

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div onClick={showSidebar} className="z-50 relative self-center place-self-end p-3 bg-white rounded-lg cursor-pointer text-gray-500 hover:text-black lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={!sidebar ? "block size-6" : "hidden"}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={sidebar ? "block size-6" : "hidden"}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            <div className={"lg:hidden fixed " + (sidebar ? "bg-black opacity-25 z-40 inset-0 w-screen h-screen" : "")}></div>
            <div className={"flex flex-col h-screen gap-6 py-8 px-2 rounded-lg fixed left-0 top-0 z-50 bg-white sm:px-6 lg:w-[19rem] lg:h-fit lg:static " + (sidebar ? "flex" : "hidden lg:flex")}>
                <div className="text-center">
                    <h2 className="text-xl font-medium">Daniil Filatov</h2>
                    <p className="text-gray-500">daniil.filatov@newlogic.cz</p>
                </div>
                <nav>
                    <ul>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={index !== 0 && "mt-3"}>
                                    <NavLink to={item.path} className={({ isActive }) => ((isActive && item.path !== "/") ? (`${item.cName} ${activeLinkClass}`) : item.cName)}>
                                        <span className="flex items-center gap-2">
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <div className="mt-auto lg:mt-0">
                    <button type="button" className="w-full p-3 rounded-lg bg-red-100 text-red-500 text-center transition-colors hover:bg-red-200 hover:text-red-700">Odhlásit se</button>
                </div>
            </div>
        </>
    )
}

export default Sidebar;