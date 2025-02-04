import React from "react";
import Project1 from "./Project1";
import Project3 from "./Project3";
import { Container } from "@mui/material";
import Project2 from "./Project2";

const Project = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-bold uppercase lg:scale-y-125 text-gray-700 text-center mb-5 lg:mb-15">
        feature Project
      </h2>
      <Container className="grid md:grid-cols-2 lg:grid-cols-3  gap-6">
        <Project1 />
        <Project2 />
        <Project3/>
      </Container>
    </div>
  );
};

export default Project;
