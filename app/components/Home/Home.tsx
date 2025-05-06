"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "@/app/pages/about/page";
import Projects from "@/app/pages/projects/page";
import Skills from "@/app/pages/skills/page";
import Contact from "@/app/pages/contact/page";
import "aos/dist/aos.css";
import Aos from "aos";

const sections = [
  { id: "about", Component: About },
  { id: "projects", Component: Projects },
  { id: "skills", Component: Skills },
  { id: "contact", Component: Contact },
];

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
    <div className="overflow-hidden scroll-smooth">
      <section id="home">
        <Hero />
      </section>
      {sections.map(({ id, Component }) => (
        <section key={id} id={id} className="scroll-mt-[5rem]">
          <Component />
        </section>
      ))}
    </div>
  );
};

export default Home;
