import React from "react";
import { Link } from "react-router-dom";
import Divider from "../components/Divider";
import { Home, Person } from "../components/Icons";
import SidebarTab from "./SidebarTab";
import Legend from "./Legend";

const mainRoutes = [
    {
        name: "Home",
        path: "/",
        icon: <Home height="20" className="mb-1" />,
    },
    {
        name: "Personal Index",
        path: "/",
        icon: <Person height="20" className="mb-1" />,
    },
];

const Sidebar = () => {
    return (
        <div className="scrollbar-hide flex h-screen w-[260px] min-w-[260px] flex-col overflow-y-auto bg-[#25244E] shadow-xl">
            <Link to="/" className="flex min-h-[80px] w-full items-center">
                <span className="ml-6 text-lg font-black uppercase">
                    Team Name
                </span>
            </Link>
            <div className="flex flex-grow flex-col px-6 py-3">
                <div className="flex flex-col">
                    <span className="font-bold text-mute">Main</span>
                    <div className="mt-5 flex flex-col gap-4">
                        {mainRoutes.map((route) => {
                            return (
                                <SidebarTab
                                    {...route}
                                    key={route.path}
                                    type="main"
                                />
                            );
                        })}
                    </div>
                </div>
                <Divider className="my-5" />
                <div className="flex flex-col">
                    <span className="font-bold text-mute">Contact</span>
                </div>
                <div className="mt-auto flex flex-col">
                    <div className="flex items-center">
                        <span className="mb-1 text-base font-semibold text-mute">
                            Legende
                        </span>
                        <Link
                            to="legende"
                            className="ml-auto text-base font-semibold text-mute underline"
                        >
                            More Info
                        </Link>
                    </div>

                    <Legend />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
