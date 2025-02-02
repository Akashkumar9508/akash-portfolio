"use client";
import React, { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
// import FloatingDockDemo from "./FloatingDockDemo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedLogo from "@/components/animated-logo";
import navLinks from "@/data/navLinks"

const Navbar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const pathname = usePathname(); // Get the current route

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className=" hidden nav bg-transparent h-[10vh] sm:h-[12vh]  w-full sm:flex  justify-between items-center px-2 sm:px-16 z-[999]">

      {/* main logo of the site  */}

      <div className="logo h-12 w-12 ml-3 sm:ml-0 z-50 flex">
        <AnimatedLogo />
      </div>

      {/* nav links  */}

      <div className="navlinks hidden sm:flex justify-center items-center text-[5vw] sm:text-[1.2vw] md:text-[0.9vw] gap-10 font-semibold ">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-[#59e1e4]  hover:decoration-2 hover:decoration-[#59e1e4] hover:transition-ease-in-out hover:duration-300 
          ${pathname === link.href
                ? "text-[#59e1e4] decoration-2 decoration-[#59e1e4]"
                : ""
              }`}
          >
            {link.name}
          </Link>
        ))}


        <Link
          href="/resume"
          className="relative ml-10 inline-flex items-center justify-center p-2 px-5 py-2 overflow-hidden font-medium text-[#59e1e4] transition duration-300 ease-out border-2 border-[#59e1e4] rounded-sm shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#59e1e4] group-hover:translate-x-0 ease">
            <svg
              className="w-5 h-5 rotate-[90deg] "
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
      </div>

      {/* mobile menu bar  */}


      <div id="menubar" className="menubar h-full w-[15%] flex items-center justify-cente sm:hidden z-[999]">
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
  );
};

export default Navbar;
