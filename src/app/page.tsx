"use client";
import SocialMediaLinks from "@/components/utility/SocialMediaLinks";
import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import FlipWordsDemo from "@/components/utility/FlipWords"
import AboutPage from "@/app/about/page" 
import Link from "next/link";
import Github from "@/components/utility/Github";
import Image from "next/image";
import AboutHero from "@/components/about/herosection";



export default function Home() {

  return (
    <div className="w-full min-h-60 md:min-h-[85vh] relative px-7 sm:px-14">
      <div className="socialMedia h-[17vw] w-[4vw] fixed right-12 bottom-7 hidden sm:block ">
        <SocialMediaLinks />
      </div>

      <div className="w-full sm:w-2/4 h-[40vh] sm:h-[80vh] flex flex-col sm:justify-end gap-2 pt-10 sm:pt-0 text-black dark:text-white ">
        <pre className="font-bold"><h1 className="text-[8vw] sm:text-[3vw] sm:text-3xl md:text-6xl">Hi, I&apos;m Akash Kumar</h1> 
        <span className="text-[6vw] sm:text-[2.5vw]" >I'am </span><span className=" text-[6vw] sm:text-[2.5vw] inline " ><FlipWordsDemo /></span></pre>
        <p className="text-[4vw] sm:text-[1.2vw]">I&apos;m a software developer specializing in high-performance, user-centric web applications. Skilled in <span className="text-[--mainText] dark:text-[--mainText] ">React.js</span>, <span className="text-[--mainText] dark:text-[--mainText]">Next.js</span>, and modern web technologies, I build seamless, scalable, and efficient solutions across the stack.</p>
      </div>



      <div className="aboutMe">
      <AboutHero />
      </div>

    <div className="skill w-full  h-lvh bg-gray-400 mt-40 sm:mt-40">
      
     
      
       </div>

      <div className="github w-full  flex justify-center items-center">
        <Github />
      </div>

      
      .
      
        
    </div>
  );
}
