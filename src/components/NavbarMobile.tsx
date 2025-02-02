"use client";

import React, { useState } from "react";
import navLinks from "@/data/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import { FaCode } from "react-icons/fa";
import GridBackgroundDemo from "@/components/GridBackgroundDemo";
import AnimatedLogo from "@/components/animated-logo";
import { Squeeze as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

const NavbarMobile = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <>
      {/* TOP NAV BAR FOR MOBILE */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sm:hidden relative top-0 w-full navbar h-[9vh] flex items-center justify-between px-2 bg-black z-50"
      >
        <div className="logo h-12 w-12 ml-3 sm:ml-0 z-50 flex">
          <AnimatedLogo />
        </div>
        <div
          id="menubar"
          className="menubar h-full w-[15%] flex items-center justify-cente sm:hidden"
        >
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={25}
            duration={0.8}
            distance="sm"
            color="#4FD1C5"
            rounded
          />
        </div>
      </motion.div>

      {/* MAIN NAVLINKS */}
      <div
        id="mobilenav"
        className={`hightadjust sm:hidden ${isOpen ? "h-[40vh]" : "h-[0vh]"
          } w-full relative transition-all duration-300 bg-red-800`}
      >
        <GridBackgroundDemo />
        <div
          id="mobileavntent"
          className={`topadjust absolute ${isOpen ? "-top-0" : "-top-96"} ${isOpen ? "opacity-100" : "opacity-0"
            } left-0 w-full sm:hidden font-semibold text-lg pt-2 h-full flex flex-col justify-center items-start px-6 transition-all duration-300`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`linkMobileNav relative hover:text-[#59e1e4] w-[80%] flex justify-start items-center py-5 border-b-2 border-[#59e1e4] hover:decoration-2 hover:decoration-[#59e1e4] hover:transition-ease-in-out hover:duration-300 ${pathname === link.href
                ? "text-[#59e1e4] decoration-2 decoration-black"
                : ""
                }`}
            >
              {link.name}
              <FaArrowRightLong className="buttonArrowflex justify-between absolute right-3 hover:rotate-12 transition-all duration-300" />
            </Link>
          ))}

          <Link
            href="/resume"
            className="relative mt-4 sm:ml-10 inline-flex items-center justify-center p-2 px-5 py-2 overflow-hidden font-medium text-[#59e1e4] transition duration-300 ease-out border-2 border-[#59e1e4] rounded-sm shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#59e1e4] group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5 rotate-[90deg]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-[#59e1e4] transition-all duration-300 transform group-hover:translate-x-full ease">
              Resume
            </span>
            <span className="relative invisible">Resume</span>
          </Link>

          <div className="absolute bottom-1 right-5 mt-4 h-[100%] w-[16%] bg--500">
            <SocialMediaLinks />
          </div>
          <p className="absolute bottom-9 text-[3vw] font-light right-24 text-[#59e1e4] flex items-center justify-center">
            <FaCode className="mr-2" /> Design By Akash
          </p>
        </div>
      </div>
    </>
  );
};

export default NavbarMobile;
