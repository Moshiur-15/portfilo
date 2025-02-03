import React from "react";
import Banner from "../Components/Banner";
import { Container } from "@mui/material";
import About from "../Components/About";
import Skills from "../Components/skills";
import Contact from "../Components/Contact";
import Project from "../Components/Project";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="my-10">
      <div id="home" className="mx-4 md:mx-8 lg:mx-0">
        <Banner />
      </div>
      <div id="about" className="bg-white py-6 md:py-10 lg:py-20">
        <About />
      </div>
      <div id="skills" className="py-6 md:py-10 lg:py-20">
        <Skills />
      </div>
      <div id="project" className="py-6 md:py-10 lg:py-20 bg-white">
        <Project />
      </div>
      <div id="contact" className="py-6 md:py-10 lg:py-20">
        <Contact />
      </div>
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
