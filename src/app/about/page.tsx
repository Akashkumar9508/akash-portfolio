"use client";
import React from 'react'
import AboutHero from "@/components/about/herosection";
import TimelineDemo from "@/components/about/TimeLine"
import { TerminalDemo } from '@/components/about/Terminal';

const page = () => {
  return (
    <>
      <div className="div px-4 ">
        <div className="div w-full sm:h-[90vh] gap-4 h-auto flex md:flex-row flex-col jc items-center">

          <div className="aboutHero w-full md:w-1/2 h-full ">

          </div>
          <div className="abouterminal w-full md:w-1/2 h-full flex items-center justify-left  ">
        <TerminalDemo />
          </div>

        </div>
        <TimelineDemo />

      </div>
      <div className="main"></div>
    </>
  )
}

export default page