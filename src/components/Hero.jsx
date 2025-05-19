import React from "react";
import heroImg from "../assets/heroImg.png";
import arrowdown from "../assets/arrowdown.svg";

const Hero = () => {
  return (
    <div className="max-w-[1920px] flex">
      <div className="text-left">
        <h1 className="text-[350px] leading-[0.65] tracking-tight py-20 px-[40px] z-10 relative">
          softwaré
          <br />
          engineer.
        </h1>
        <div className="flex flex-row">
          <img className="pl-[40px] pr-[20px]" src={arrowdown} />
          <p className="py-4">
            ...with over 5 years of professional experience. let me take you
            <br />
            through my portfolio, (which is why you’re here anyway) and take a
            <br />
            dive into my world as a front-end softwaré engineer!
          </p>
        </div>
      </div>

      <img
        className="absolute top-20 left-[1140px] h-[950px] z-10"
        src={heroImg}
      />
    </div>
  );
};

export default Hero;
