"use client";

import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import ToggleTheme from "../../Helper/ToggleTheme";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import handleScroll from "../../Helper/handleScroll";

// define props type

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "var(--bg-mobile",
      }}
      className={`fixed top-0 z-[10] w-full transition-all duration-300 ${
  navBg ? "sm:h-15 md:h-11" : "h-[10vh]"
} bg-[var(--bg-primary)]`}
    >

      {/* className={ */}
      <div className="flex items-center h-full justify-around  md:justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* Logo Section */}
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="cursor-pointer ml-[-1.5rem] sm:ml-0 pl-6"
          />
        </Link>
        {/* Navigation Links */}
        <div className="flex items-center md:justify-between sm:space-x-10">
          <div className="hidden xl:flex items-center gap-14 space-x-10">
            {navLinks.map((navlink) => {
              return (
                <a
                  key={navlink.id}
                  href={navlink.url}
                  className="nav__link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(navlink.url.replace("#", ""));
                  }}
                >
                  {navlink.label}
                </a>
              );
            })}
          </div>
          {/* Button*/}
          <div className="flex items-center space-x-4">
            <Link href="/pages/contact">
              <button className=" px-2 py-1  md:px-5 md:py-2 text-green-900 fonts-semibold text-xs sm:text-base  bg-white hover:bg-gray-200 hover:text-slate-900 transition-all duration-200 rounded-md">
                Hire Me!
              </button>
            </Link>
            <div
              className="flex gap-2 sm:gap-8 md:px-10 justify-end text-4xl  items-end "
              style={{
                color: "var(--text-mobile)",
              }}
            >
              <ToggleTheme />
              <a
                href="https://github.com/wander-cardoso"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-yellow-100"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/wander-cardoso-4ba28114b/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-yellow-100"
              >
                <FaLinkedin />
              </a>
            </div>
            {/* Mobile Menu Icon */}
            <HiBars3BottomRight
              onClick={openNav}
              className="w-12 h-full cursor-pointer text-primary xl:hidden"
              style={{
                color: "var(--text-mobile)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
