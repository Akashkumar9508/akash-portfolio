"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import favicon from "@/assets/favicon.ico"
import Github from "@/assets/github.png"
import Linkedin from "@/assets/linkedin.png"
import Youtube from "@/assets/youtube.png"
import { WobbleCard } from "@/components/ui/wobble-card";

const HeroScrollDemo =()=> {
  return (

    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              This is all  <br />
              <span className="text-4xl md:text-[5rem] font-bold mt-1 leading-none">
                ABOUT ME
              </span>
            </h1>
          </>
        }
      >
        <div
        className="w-full rounded-2xl object-cover h-full object-left-top flex flex-col gap-2 ">
          <div className="linkdin-github gap-2 h-1/2 w-full flex">
          <WobbleCard >

          <div className= "github-page-div rounded-2xl hidden sm:block sm:w-full h-full">
            <Image src={Github} className="h-full w-full" alt="logo" ></Image>
          </div>

          </WobbleCard>
          <WobbleCard >

          <div className="w-full sm:w-full h-full">
            <Image src={Linkedin} alt="logo" className="h-full w-full" ></Image>
          </div>
          </WobbleCard>
          </div>
          <div className="youtube h-1/2 w-full bg-purple-200 rounded-2xl overflow-hidden ">
            <Image src={Youtube} alt="logo" className="h-full w-full" ></Image>
          </div>
        </div>
      </ContainerScroll>
    </div>

  );
}

export default HeroScrollDemo