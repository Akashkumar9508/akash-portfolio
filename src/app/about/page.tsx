"use client";
import React from 'react'
import AboutHero from "@/components/about/herosection";
import TimelineDemo from "@/components/about/TimeLine"
import { TerminalDemo } from '@/components/about/Terminal';

const page = () => {
  return (
    <>
      <div className="div">
        <TerminalDemo />
        <TimelineDemo />

      </div>
      <div className="main"></div>
    </>
  )
}

export default page