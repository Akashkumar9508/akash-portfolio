import React from 'react'
import Resume from '@/components/resume/Resume';
import Link from 'next/link';

const page = () => {
  return (
    <div className='relative'><Resume />
    
    <div className='fixed bottom-24 sm:bottom-5  right-6 sm:right-12'>
      <Link href={'/resume.pdf'} target='_blank' >
    
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border-2 border-[--mainText] dark:border-[--mainText] bg-bg[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-[--mainText] dark:text-[--mainText] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          downlaod cv
        </button>

      </Link>
    </div>

    </div>

  )
}

export default page