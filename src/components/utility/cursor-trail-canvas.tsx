"use client";
import { CSSProperties} from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { cursorTrail } from "@/components/ui/cursor-trail";

export interface CursorTrailCanvasProps {
  color?: string;
  className?: string;
  style?: CSSProperties;
}

export default function CursorTrailCanvas(props: CursorTrailCanvasProps) {
  const refCanvas = useRef<HTMLCanvasElement>(null!); 

  useEffect(() => {
    const { cleanUp, renderTrailCursor } = cursorTrail({
      ref: refCanvas,
      color: "#349698",
    });

    renderTrailCursor();

    return () => {
      cleanUp();
    };
  }, [props.color]);

  return <canvas ref={refCanvas} className={props.className} style={props.style}></canvas>;
}
