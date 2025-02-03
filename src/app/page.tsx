"use client";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import FlipWordsDemo from "@/components/utility/FlipWords"
import AboutPage from "@/app/about/page" 



export default function Home() {

  return (
    <div className="w-full min-h-60 md:min-h-[85vh] relative px-7 sm:px-14">
      <div className="socialMedia h-[17vw] w-[4vw] fixed right-12 bottom-7 ">
        <SocialMediaLinks />
      </div>

      <div className="w-full sm:w-2/4 h-[40vh] sm:h-[80vh] flex flex-col sm:justify-end gap-2 pt-10 sm:pt-0">
        <pre className="font-bold"><h1 className="text-[8vw] sm:text-[3vw] sm:text-3xl md:text-6xl">Hi, I&apos;m Akash Kumar</h1> 
        <span className="text-[6vw] sm:text-[2.5vw]" >I'am </span><span className="text-[#59e1e4] text-[6vw] sm:text-[2.5vw] inline " ><FlipWordsDemo /></span></pre>
        <p className="text-[4vw] sm:text-[1.2vw]">I&apos;m a software developer specializing in high-performance, user-centric web applications. Skilled in <span className="text-[#59e1e4]">React.js</span>, <span className="text-[#59e1e4]">Next.js</span>, and modern web technologies, I build seamless, scalable, and efficient solutions across the stack.</p>
      </div>


      <div className=" mt-48 sm:mt-40">
        <AboutPage />
      </div>
      
      
        
    </div>
  );
}
