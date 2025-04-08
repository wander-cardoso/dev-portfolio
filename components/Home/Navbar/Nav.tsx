import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="fixed h-[12vh] z-[10] bg-blue-950 w-full">
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* Logo Section */}
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={120}
          height={120}
          className="cursor-pointer ml-[-1.5rem] sm:ml-0"
        />
        {/* Navigation Links */}
        <div className="flex items-center space-x-10">
          <div>
          {navLinks.map((navlink) => {
            return (
              <Link key={navlink.id} href={navlink.url}>
                <p className=" nav__link">{navlink.label}</p>
              </Link>
            );
          })}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Nav;
