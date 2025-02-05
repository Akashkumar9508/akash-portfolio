'use client';
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const CurrentTime: React.FC = () => {
  const [time, setTime] = useState(dayjs().format("hh:mm "));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().format("hh:mm"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <h1 className="fixed bottom-1 right-1 text-[0.8rem]" >{time}</h1>;
};

export default CurrentTime;
