import { navLinks } from "@/constant/constant";
import React from "react";
import { CgClose } from "react-icons/cg";
import handleScroll from "../../Helper/handleScroll";


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
        onClick={closeNav}
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[100] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* nav links*/}
      <div
        className={` ${navOpen}  transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%]  space-y-6 gap-6 z-[10000] `}
        style={{
          backgroundColor: "var(--bg-mobile)",
          color: "var(--text-mobile)",
        }}
      >
        {navLinks.map((navlink) => {
          return (
            <a
              key={navlink.id}
              href={navlink.url}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(navlink.url.replace("#", ""));
                closeNav();
              }}
            >
              <p className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]">
                {navlink.label}
              </p>
            </a>
          );
        })}
        {/* close Button*/}
        <CgClose
          onClick={closeNav}
          className="sm:w-8 sm:h-8 w-8 h-8 cursor-pointer  absolute top-[0.7rem] right-[1.4rem]"
          style={{
            color: "var(--text-mobile)",
          }}
        />
      </div>
    </div>
  );
};

export default MobileNav;
