'use client';

import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

const Github: React.FC = () => {

  const theme = {
    // dark: ["#111111", "#59e1e4", "#34e9ec", "#59b4b6", "#84b4b5"],
    dark: ["#111111","#84b4b5" , "#59b4b6", "#34e9ec", "#59e1e4"],
  };

  return (
    <Row className=" w-full flex flex-col mt-40  sm:mt-10 justify-center items-center" style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading text-[#84b4b5] " style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="Akashkumar9508"
        blockSize={15}
        blockMargin={5}
        theme={theme}
        fontSize={16}
      />
    </Row>
  );
};

export default Github;
