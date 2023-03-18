import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Frame = () => {
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif;",
      }}
      className="flex h-screen w-screen bg-[#171649] text-neutral-50"
    >
      <Sidebar />
      <div className="flex h-screen w-full flex-col overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Frame;
