"use client";

import { LineShadowText } from "@/components/ui/textShadow";
import { useTheme } from "next-themes";

export function LineShadowTextDemo() {
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
  return (
    <h1 className="project-heading text-black dark:text-white text-[8vh] sm:text-[8vh] mb-24 sm:mb-28 md:text-center " >Skills I
    <LineShadowText className=" italic text-[--mainText] dark:text-[--mainText] font-bold" shadowColor={shadowColor}>
    KNOW
     </LineShadowText>
    </h1>
  );
}
