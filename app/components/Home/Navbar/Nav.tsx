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
      className={`" fixed ${navBg ? " h-12" : "var(--bg-primary)"} h-[10vh] z-[10]  w-full  transition-all duration-200 scroll-mt-24`}
    >
      <div className="flex items-center h-full justify-between  w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
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
        <div className="flex items-center space-x-10">
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
              <button className="md:px-10 md:py-2 px-5 py-2 text-green-900 fonts-semibold sm:text-base text-sm bg-white hover:bg-gray-200 hover:text-slate-900 transition-all duration-200 rounded-lg">
                Hire Me!
              </button>
            </Link>
            <div
              className="flex gap-8 px-10 justify-end text-4xl  items-end "
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
              className="w-8 h-8 cursor-pointer text-primary xl:hidden"
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
