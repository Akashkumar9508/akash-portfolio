"use client";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";




export default function Home() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software", "Mandy", "Candy", "More Strings"],
   
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="w-full min-h-60 md:min-h-[85vh] relative bg-green-300 ">
      <div className="socialMedia h-[17vw] w-[5vw] fixed right-12 bottom-7 ">
        <SocialMediaLinks />
      </div>

      <div className="w-2/4 h-auto bg-red-300">
        <h1 className="text-[3xl] sm:text-3xl md:text-6xl">Hi , I&apos;m Akash Kumar</h1><span ref={el}></span>
        <p className="">"I&apos;m a software developer specializing in high-performance, user-centric web applications. Skilled in React.js, Next.js, and modern web technologies, I build seamless, scalable, and efficient solutions across the stack."</p>
      </div>
      
      
        
    </div>
  );
}
