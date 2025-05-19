import React from "react";
import aboutImg from "../assets/aboutImg.jpg";

const About = () => {
  return (
    <div className="mt-90 ml-[40px] text-left h-screen overflow-hidden">
      <h2 className=" text-[128px] leading-[0.9] tracking-tight">
        My expertise lies in translating UI/UX
        <br />
        designs into functional, pixel-perfect <br />
        interfaces and optimizing front-end <br />
        performance.
      </h2>
      <div className="flex flex-row mt-[55px] justify-between ">
        <img src={aboutImg} />
        <p className="text-base pr-[40px]">
          Over the years, I’ve collaborated with cross-functional teams to build
          scalable
          <br />
          front-end architectures, design systems, and interactive experiences
          that prioritize <br />
          performance and user engagement.
          <br />
          <br /> I care deeply about code quality, accessibility, and creating
          intuitive digital products
          <br /> that solve real problems.
          <br />
          <br /> Whether it's building from scratch or optimizing existing
          systems, I bring a strong eye
          <br /> for detail, a user-first mindset, and a commitment to
          delivering high-quality solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
