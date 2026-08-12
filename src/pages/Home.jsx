import React from "react";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import AboutBrief from "../components/AboutMe";
import CTA from "../components/CTA";
import Projects from "../components/MyProjects";

const Home = () => {
  return (
    <div className="h-[100vh-10vh] w-full">
      <Hero />
      <Marquee />
      <AboutBrief />
      <Projects />
      <CTA />
    </div>
  );
};

export default Home;
