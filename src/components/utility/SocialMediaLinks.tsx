"use client";
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { motion ,AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import FadeUp from '@/animations/fade-up';
import { Fade } from 'hamburger-react';



const SocialMediaLinks = () => {
  return (
    <AnimatePresence>
    <FadeUp duration={0.6} whileInView={true} >
    <div className='h-full w-full flex flex-col items-center justify-end gap-2 m-auto'>
      {/* github link  */}
      <Link href="https://github.com/Akashkumar9508" target='_blank' ><div className="socialLink  h-12 w-12 sm:h-10 sm:w-10 border-2 border-[--mainText] dark:border-[--mainText]  rounded-full grid items-center "><FaGithub className='innerIcons text-[8vw] sm:text-[1.5vw] m-auto text-[--mainText] dark:text-[--mainText]' /></div></Link> 
      {/* linkedin link  */}
      <Link href="https://www.linkedin.com/in/akashkkumar9508/" target='_blank'><div className="socialLink linkedin  h-12 w-12 sm:h-10 sm:w-10 border-2 border-[--mainText] dark:border-[--mainText] rounded-full grid items-center "><AiFillLinkedin className='innerIcons text-[8vw] sm:text-[1.5vw] m-auto text-[--mainText] dark:text-[--mainText]' /></div></Link> 
      {/* instagram link  */}
      <Link href="https://www.instagram.com/akash_yadav_mist/" target='_blank' ><div className="socialLink linkedin  h-12 w-12 sm:h-10 sm:w-10 border-2 border-[--mainText] dark:border-[--mainText]  rounded-full grid items-center "><FaInstagram className=' innerIcons text-[8vw] sm:text-[1.5vw] m-auto text-[--mainText] dark:text-[--mainText]'  /></div></Link>

      <motion.div className='h-24 w-[2%] bg-[--background] dark:bg-[--background] -mt-2 relative flex flex-col gap-5' >
        <motion.div initial={{ y: 80 }} animate={{ y: 0 }} transition={{ repeat: Infinity, duration: 0.8 }} className=' h-1  w-full  top-0 -left-1 rounded-sm bg-[--mainText] dark:bg-[--mainText] '></motion.div>
        {/* <motion.div initial={{y:80}} animate={{y:10}} transition={{ repeat: Infinity, duration: 1 ,delay:0.2 }} className=' h-3  w-full  top-0 -left-1 rounded-sm bg-[#59e1e4]'></motion.div> */}
        {/* <motion.div initial={{y:80}} animate={{y:0}} transition={{ repeat: Infinity, duration: 1 }} className=' h-3  w-full  top-0 -left-1 rounded-sm bg-[#59e1e4]'></motion.div> */}
        <div className="smallCircle absolute h-2 w-2  bottom-0 -left-1 rounded-full bg-[--mainText] dark:bg-[--mainText] "></div>
      </motion.div>

    </div>
    </FadeUp>
    </AnimatePresence>
  )
}

export default SocialMediaLinks