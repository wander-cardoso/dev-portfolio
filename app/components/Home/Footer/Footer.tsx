"use client";

import { navLinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import handleScroll from "../../Helper/handleScroll";

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div
      className=" pt-5 pb-1.5 items-center "
      style={{
        backgroundColor: "var(--bg-mobile)",
      }}
    >
      <div className="mx-auto w-fit">
        <Link href="/">
          <Image src="/images/logo.svg" alt="Logo" width={35} height={35} />
        </Link>
      </div>
      <div
        className="xl:flex items-end justify-around mx-40 space-y-4  font-bold hidden "
        style={{
          color: "var(--text-primary)",
        }}
      >
        {navLinks.map((navlink) => {
          return (
            <a key={navlink.id} href={navlink.url} className="nav__link"
              onClick={(e) => {
                e.preventDefault();
                const sectionId = navlink.url.replace("#", "");

                if (pathname === "#home") {
                  handleScroll((sectionId));
                } else {
                  router.push(`/${navlink.url}`);
                }
              }}
            >
              {navlink.label}
            </a>
          );
        })}
      </div>
      <p className=" text-opacity-60 text-sm mt-6 text-center text-white">
        © 2025 All Rights Reserved by Wander Cardoso Developer
      </p>
    </div>
  );
};

export default Footer;
