import React from "react";
import { Outlet } from "react-router-dom";

const Frame = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="hidden w-64 md:block bg-gray-700">Sidebar</div>
      <div className="flex h-screen flex-col w-full overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Frame;
