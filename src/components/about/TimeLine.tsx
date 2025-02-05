import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
// import data from "@/data/timeline";

const TimelineDemo=()=> {
  const data = [
    {
      title: "2020",
      content: (
        <div> 
          <p className="text-[--mainText] dark:text-[--mainText] text-[7vw] md:text-[2.2vw] font-medium mb-4">
          Matriculation ( CBSE )
  
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Completed my All India Senior School Certificate Examination with CBSE Board.
          </p>
          
          <div className="grid  gap-4 text-black dark:text-gray-400">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea eius deleniti, possimus molestiae labore quidem, repudiandae repellat ab excepturi culpa pariatur sint unde, error magni quasi architecto fugit ipsam quos aliquam totam porro? Nisi rerum incidunt voluptatibus cumque quasi?</p>
          </div>
        </div>
      ),
    },  
    {
      title: "2022",
      content: (
        <div>
          <p className="text-[--mainText] dark:text-[--mainText] text-[7vw] md:text-[2.1vw] font-medium mb-8">
          AISSCE ( SCIENCE )
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Completed my All India Senior School Certificate Examination with CBSE Board.
          </p>
          <div className="grid  gap-4 text-black dark:text-gray-400">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea eius deleniti, possimus molestiae labore quidem, repudiandae repellat ab excepturi culpa pariatur sint unde, error magni quasi architecto fugit ipsam quos aliquam totam porro? Nisi rerum incidunt voluptatibus cumque quasi?</p>
          </div>
        </div>
      ),
    },
    {
        title: "2025",
        content: (
          <div>
            <p className="text-[--mainText] dark:text-[--mainText] text-[7vw] md:text-[2.1vw] font-medium mb-8">
            Graudation ( BCA )
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Completing my Graudation degree with BCA (Bachelor of Computer Applications).
            </p>
            <div className="grid  gap-4 text-black dark:text-gray-400">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea eius deleniti, possimus molestiae labore quidem, repudiandae repellat ab excepturi culpa pariatur sint unde, error magni quasi architecto fugit ipsam quos aliquam totam porro? Nisi rerum incidunt voluptatibus cumque quasi?</p>
            </div>
          </div>
        ),
      },
    ];
  return (
    <div className="w-full mt-20">
      <Timeline data={data} />
    </div>
  );
}

export default TimelineDemo