import React from "react";
import { Outlet } from "react-router";
import NavBer from "../Components/NavBer";
const MainLayout = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <NavBer />
      <div className="min-h-[calc(100vh-330px)]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
