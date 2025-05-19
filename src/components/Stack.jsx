import React from "react";
import {
  FaFigma,
  FaReact,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
} from "react-icons/fa";
import "../index.css";

const stackItems = [
  { icon: <FaFigma size={32} />, label: "Figma" },
  { icon: <FaReact size={32} />, label: "React" },
  { icon: <FaJs size={32} />, label: "JavaScript" },
  { icon: <FaCss3Alt size={32} />, label: "CSS" },
  { icon: <FaHtml5 size={32} />, label: "HTML" },
  { icon: <FaBootstrap size={32} />, label: "Bootstrap" },
];

const Stack = () => {
  return (
    <div className="flex justify-center w-full overflow-hidden border-t-2 border-b-2 border-gray-300 py-10 mt-10 ">
      <div className="scroll-animation">
        {[...stackItems, ...stackItems, ...stackItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center px-4 whitespace-nowrap w-full"
          >
            {item.icon}
            <p className="ml-2">{item.label}</p>
            <span className="px-4">●</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
