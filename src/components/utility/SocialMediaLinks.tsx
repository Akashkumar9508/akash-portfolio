"use client";
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { motion } from 'framer-motion'
import Link from 'next/link'



const SocialMediaLinks = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-end gap-2 m-auto'>
      {/* github link  */}
      <Link href="https://github.com/Akashkumar9508" target='_blank' ><div className="socialLink  h-12 w-12 border-2 border-[--mainText] dark:border-[--mainText]  rounded-full grid items-center "><FaGithub className='innerIcons text-4xl m-auto text-[--mainText] dark:text-[--mainText]' /></div></Link> 
      {/* linkedin link  */}
      <Link href="https://www.linkedin.com/in/akashkkumar9508/" target='_blank'><div className="socialLink linkedin  h-12 w-12 border-2 border-[--mainText] dark:border-[--mainText] rounded-full grid items-center "><AiFillLinkedin className='innerIcons text-4xl m-auto text-[--mainText] dark:text-[--mainText]' /></div></Link> 
      {/* instagram link  */}
      <Link href="https://www.instagram.com/akash_yadav_mist/" target='_blank' ><div className="socialLink linkedin  h-12 w-12 border-2 border-[--mainText] dark:border-[--mainText]  rounded-full grid items-center "><FaInstagram className=' innerIcons  text-4xl m-auto text-[--mainText] dark:text-[--mainText]'  /></div></Link>

      <motion.div className='h-24 w-[2%] bg-[--background] dark:bg-[--background] -mt-2 relative flex flex-col gap-5' >
        <motion.div initial={{ y: 80 }} animate={{ y: 0 }} transition={{ repeat: Infinity, duration: 0.8 }} className=' h-3  w-full  top-0 -left-1 rounded-sm bg-[#59e1e4]'></motion.div>
        {/* <motion.div initial={{y:80}} animate={{y:10}} transition={{ repeat: Infinity, duration: 1 ,delay:0.2 }} className=' h-3  w-full  top-0 -left-1 rounded-sm bg-[#59e1e4]'></motion.div> */}
        {/* <motion.div initial={{y:80}} animate={{y:0}} transition={{ repeat: Infinity, duration: 1 }} className=' h-3  w-full  top-0 -left-1 rounded-sm bg-[#59e1e4]'></motion.div> */}
        <div className="smallCircle absolute h-2 w-2  bottom-0 -left-1 rounded-full bg-[#59e1e4]"></div>
      </motion.div>

    </div>
  )
}

export default SocialMediaLinks