import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Project/Project";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Skills/>
      <Contact/>
    </div>
  );
};

export default Home;
