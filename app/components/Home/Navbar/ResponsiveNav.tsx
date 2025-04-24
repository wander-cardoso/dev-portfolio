"use client";

import { useState } from "react";
import { ThemeProvider } from "../../Helper/ThemeProvider";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <ThemeProvider>
      <Nav openNav={showNavHandler} />
      
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </ThemeProvider>
  );
};

export default ResponsiveNav;
