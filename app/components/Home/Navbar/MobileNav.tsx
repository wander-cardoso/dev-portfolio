import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";


// define props type
type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "-translate-x-[100%]";

  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[100] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* nav links*/}
      <div
        className={`text-textprimary ${navOpen}  transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-green-950 space-y-6 gap-6 z-[10000] `}
      >
        {navLinks.map((navlink) => {
          return (
            <Link key={navlink.id} href={navlink.url} onClick={closeNav}>
              <p className=" nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">
                {navlink.label}
              </p>
            </Link>
          );
        })}
        {/* close Button*/}
        <CgClose
          onClick={closeNav}
          className="sm:w-8 sm:h-8 w-8 h-8 cursor-pointer text-textprimary absolute top-[0.7rem] right-[1.4rem]"
        />
      </div>
    </div>
  );
};

export default MobileNav;
