import React from "react";
import { Outlet } from "react-router";
import NavBer from "../Components/NavBer";
const MainLayout = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <div className="sticky z-50 top-0">
      <NavBer />
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
