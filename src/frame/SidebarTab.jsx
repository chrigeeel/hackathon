import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarTab = ({ path, name, type, icon, iconClassName }) => {
    const location = useLocation();
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        setSelected(location.pathname == path);
    });

    switch (type) {
        case "dashboard":
            return (
                <Link to={path} className="flex items-center ">
                    <span className="w-7">
                        <img src={icon} />
                    </span>
                    <span className="ml-2 font-semibold">{name}</span>
                </Link>
            );
        case "main":
            return (
                <Link
                    to={path}
                    className={
                        `flex items-center rounded-lg border-[2.6px] border-[#49487C]
						bg-[#393869] px-2 py-2 transition
						` +
                        (() => {
                            if (selected) {
                                return "border-opacity-100 bg-opacity-100";
                            }
                            return "border-opacity-30 bg-opacity-30 hover:border-opacity-50 hover:bg-opacity-70";
                        })()
                    }
                >
                    <div className="text-mute">{icon}</div>
                    <span className="ml-2 font-semibold">{name}</span>
                </Link>
            );
        case "additional":
            return (
                <a href={path} className="flex items-center" target="_blank">
                    <span className="font-semibold">{name}</span>
                </a>
            );
    }

    return null;
};

export default SidebarTab;
