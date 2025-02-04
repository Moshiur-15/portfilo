import React from "react";
import { Outlet } from "react-router";
const MainLayout = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
