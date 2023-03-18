import React from "react";
import { Outlet } from "react-router-dom";

const Frame = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="hidden w-64 bg-gray-700 md:block">Sidebar</div>
      <div className="flex h-screen w-full flex-col overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Frame;
