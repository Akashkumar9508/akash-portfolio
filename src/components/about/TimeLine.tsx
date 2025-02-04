import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import data from "@/data/timeline";

const TimelineDemo=()=> {
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export default TimelineDemo