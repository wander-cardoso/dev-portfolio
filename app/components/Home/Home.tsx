"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "@/app/pages/about/page";
import Projects from "@/app/pages/projects/page";
import Skills from "@/app/pages/skills/page";
import Contact from "@/app/pages/contact/page";
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
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
