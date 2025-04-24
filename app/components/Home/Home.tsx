"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "../../about/page";
import Services from "../../project/page";
import Skills from "../../skills/page";
import Contact from "../../contact/page";
import "aos/dist/aos.css";
import Aos from "aos";





const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      Aos.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
