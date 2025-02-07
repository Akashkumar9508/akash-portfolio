import React from 'react'
import AboutHero from "@/components/about/herosection";
import TimelineDemo from "@/components/about/TimeLine"

const page = () => {
  return (
    <>
      <div className='relative h-auto'>
        <AboutHero />
        
        </div>
        <div className="div">
        <TimelineDemo />

        </div>
        <div className="main"></div>
    </>
  )
}

export default page