"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import favicon from "@/assets/favicon.ico"

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
        <Image
          src={favicon}
          alt="hero"
          height={720}
          width={1000}
          className=" rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

export default HeroScrollDemo