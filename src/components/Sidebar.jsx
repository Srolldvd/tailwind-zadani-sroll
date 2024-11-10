import { useState } from "react";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="max-w-[18.75rem] flex flex-col gap-6 py-8 px-6 rounded-lg bg-white">
            <div className="text-center">
                <h2 className="text-xl font-medium">Daniil Filatov</h2>
                <p className="text-gray-500">daniil.filatov@newlogic.cz</p>
            </div>
            <nav>
                <ul>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={index !== 0 && "mt-3"}>
                                <Link to={item.path} className={item.cName}>
                                    <span className="flex items-center gap-2">
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <div>
                <button type="button" className="w-full p-3 rounded-lg bg-red-100 text-red-500 text-center">Odhlásit se</button>
            </div>
        </div>
    )
}

export default Sidebar;