import React from 'react'
import Resume from '@/components/resume/Resume';
import Link from 'next/link';

const page = () => {
  return (
    <div className='relative'><Resume />
    
    <div className='fixed bottom-5 right-12'>
      <Link href={'/resume.pdf'} target='_blank' >
    
        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-[#59e1e4] bg-bg[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-[#59e1e4] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          downlaod cv
        </button>

      </Link>
    </div>

    </div>

  )
}

export default page