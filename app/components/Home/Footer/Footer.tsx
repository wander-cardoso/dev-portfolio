import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" pt-16 pb-16 bg-black">
      <div><Link href="/"> 
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={80}
          height={80}
          className="mx-auto"
        /></Link>
      </div>
      <div className=" flex items-center flex-wrap justify-center space-x-10 space-y-4 text-primary font-bold ">
        <div></div> {navLinks.map((navlink) => {
              return (
                <Link key={navlink.id} href={navlink.url}>
                  <p >{navlink.label}</p>
                </Link>
              );
            })}
      </div>
      <p className="text-primary text-opacity-60 text-sm mt-6 text-center">
        © 2025 All Rights Reserved by Wander Cardoso Developer
      </p>
    </div>
  );
};

export default Footer;
