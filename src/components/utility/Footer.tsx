import { Fade } from 'hamburger-react'
import React from 'react'
import FadeUp from '@/animations/fade-up'

const Footer = () => {
  return (
    <FadeUp duration={1.2}  whileInView>
    <div className='h-[7vh] w-full flex gap-4 justify-center items-center' >
        <div className='w-[30%] h-[0.2vh] bg-white'> </div>
        <h1>made with ❤️ Akash</h1>
        <div className='w-[30%] h-[0.2vh] bg-white'> </div>
    </div>
    </FadeUp>
  )
}

export default Footer