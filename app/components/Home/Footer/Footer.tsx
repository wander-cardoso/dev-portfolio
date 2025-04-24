import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" pt-16 pb-16 items-center bg-black">
      <div className="mx-auto w-fit">
        <Link href="/">
          <Image src="/images/logo.svg" alt="Logo" width={35} height={35} />
        </Link>
      </div>
      <div className=" flex items-end justify-center space-x-10 space-y-4 text-textprimary font-bold ">
        {navLinks.map((navlink) => {
          return (
            <Link key={navlink.id} href={navlink.url}>
              <p>{navlink.label}</p>
            </Link>
          );
        })}
      </div>
      <p className="text-textprimary text-opacity-60 text-sm mt-6 text-center">
        © 2025 All Rights Reserved by Wander Cardoso Developer
      </p>
    </div>
  );
};

export default Footer;
