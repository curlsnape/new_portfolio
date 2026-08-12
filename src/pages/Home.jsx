import React from "react";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import AboutBrief from "../components/AboutMe";
import ContactCTA from "../components/CTA";
import ProjectsPreview from "../components/MyProjects";
import Work from "../components/MyProjects";

const Home = () => {
  return (
    <div className="h-[100vh-10vh] w-full">
      <Hero />
      <Marquee />
      <AboutBrief />
      <Work />
      <ContactCTA />
    </div>
  );
};

export default Home;
