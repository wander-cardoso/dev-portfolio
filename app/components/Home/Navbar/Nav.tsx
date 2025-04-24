"use client";

import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import ToggleTheme from "../../Helper/ToggleTheme";
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
        backgroundColor: "var(--bg-tertiary)",
      }}
      className={`" fixed ${navBg ? " h-11" : "var(--bg-primary)"} h-[12vh] z-[10]  w-full  transition-all duration-200 `}
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
          <div className="hidden lg:flex items-center gap-14 space-x-10">
            {navLinks.map((navlink) => {
              return (
                <Link key={navlink.id} href={navlink.url}>
                  <p className=" nav__link">{navlink.label}</p>
                </Link>
              );
            })}
          </div>
          <ToggleTheme />
          {/* Button*/}
          <div className="flex items-center space-x-4">
            <Link href="/contact">
              <button className="md:px-10 md:py-2 px-5 py-2 text-green-900 fonts-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
                Hire Me!
              </button>
            </Link>
            {/* Mobile Menu Icon */}
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-primary lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
