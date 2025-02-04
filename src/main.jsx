import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Home from "./Page/Home";
import ProjectDetails2 from "./Components/Project/ProjectDetails2";
import ProjectDetails3 from "./Components/Project/ProjectDetails3";
import ProjectDetails1 from "./Components/Project/ProjectDetails1";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/project/projectDetails1" element={<ProjectDetails1 />} />
          <Route path="/project/projectDetails2" element={<ProjectDetails2 />} />
          <Route path="/project/projectDetails3" element={<ProjectDetails3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
