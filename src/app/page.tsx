"use client";
import SocialMediaLinks from "@/components/utility/SocialMediaLinks";
import React from "react";
import { useEffect, useRef, useState } from "react";
import FlipWordsDemo from "@/components/utility/FlipWords"
import AboutPage from "@/app/about/page"
import Link from "next/link";
import Github from "@/components/utility/Github";

import AboutHero from "@/components/about/herosection";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import FadeUp from "@/animations/fade-up";




export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="relative w-full min-h-60 md:min-h-[85vh]  px-7 sm:px-14">
      <div className="socialMedia h-[17vw] w-[4vw] fixed right-12 bottom-7 hidden sm:block ">
        
      </div>

      <AnimatePresence>
        <motion.div animate={{
          transform: `translateY(${progress * 10}vh)`,
        }}
        transition={{ type: "spring", stiffness: 30 }}
        ref={ref} className="w-full sm:w-2/4 h-[40vh] sm:h-[80vh] flex flex-col sm:justify-end gap-2 pt-10 sm:pt-0 text-black dark:text-white ">
          <FadeUp key="title" duration={0.6} ><pre className="font-bold"><h1 className="text-[8vw] sm:text-[3vw] sm:text-3xl md:text-6xl">Hi, I&apos;m Akash Kumar</h1>
            <span className="text-[6vw] sm:text-[2.5vw]" >I'am </span><span className=" text-[6vw] sm:text-[2.5vw] inline " ><FlipWordsDemo /></span></pre>
          </FadeUp>
          <FadeUp key="description" duration={0.6} delay={0.4}>
            <p className="text-[4vw] sm:text-[1.2vw]">I&apos;m a software developer specializing in high-performance, user-centric web applications. Skilled in <span className="text-[--mainText] dark:text-[--mainText] ">React.js</span>, <span className="text-[--mainText] dark:text-[--mainText]">Next.js</span>, and modern web technologies, I build seamless, scalable, and efficient solutions across the stack.</p>
          </FadeUp>

        </motion.div>



        <FadeUp key="about" duration={0.6} whileInView={true} >
          <div className="aboutMe">
            <AboutHero />
          </div>
        </FadeUp>
        <FadeUp key="skills" duration={0.6} whileInView={true} >
          <div className="skill w-full  h-lvh bg-gray-400 mt-40 sm:mt-40">
            {/* skill section here  */}
          </div>
        </FadeUp>
        <FadeUp key="github" duration={0.6} whileInView={true} >
          <div className="github w-full sm:mb-40  flex justify-center items-center">
            <Github />
          </div>
        </FadeUp>
      </AnimatePresence>




    </div>
  );
}
