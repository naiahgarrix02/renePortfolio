import React from "react";
import arrowDown from "../assets/arrowdown.svg";

const ProjectsIntro = () => {
  return (
    <div className="flex flex-col items-center my-90">
      <div className="flex flex-col items-start ">
        <h2 className="text-[128px] leading-[0.9] pb-[56px]">
          What can I do with these?
          <br />
          Well, I'm glad you asked!
        </h2>
        <p className="text-base text-left">
          Oh, and we’re scrolling to the right now,
          <br /> gotta keep things interesting!
        </p>
      </div>
      <div className="items-end">
        <img className="transform rotate-270" src={arrowDown} />
      </div>
    </div>
  );
};

export default ProjectsIntro;
