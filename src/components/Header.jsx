import React from "react";

const Header = () => {
  return (
    <div className="max-w-[1075px] flex justify-between items-center mx-auto">
      <nav className="space-x-8">
        <a className=" text-black text-base hover cursor-pointer">home</a>
        <a className="text-gray-700 text-base hover:text-black cursor-pointer">
          about
        </a>
      </nav>

      <div>
        <h1 className="font-bold text-3xl font-[Afacad]">rené sambou</h1>
      </div>

      <nav className="space-x-8">
        <a className="text-gray-700 text-base hover:text-black cursor-pointer">
          projects
        </a>
        <a className="text-gray-700 text-base hover:text-black cursor-pointer">
          contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
