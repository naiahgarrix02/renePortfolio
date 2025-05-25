import React from "react";
import projectsarrow from "../assets/projectsarrow.svg";
import "../index.css";

const Projects = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col w-[734px] h-[620px] items-center pb-[36px] justify-end rounded-4xl bg-background drop-shadow-xl">
        <div className="flex w-[654px] justify-between">
          <h2 className="text-white text-[64px]">the dashboard</h2>
          <img src={projectsarrow} />
        </div>
      </div>
      <div className="flex flex-col w-[734px] h-[620px] items-center pb-[36px] justify-end rounded-4xl bg-background drop-shadow-xl">
        <div className="flex w-[654px] justify-between">
          <h2 className="text-white text-[64px]">the dashboard</h2>
          <img src={projectsarrow} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
