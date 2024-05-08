"use client"
import React, { useState } from "react";
import Link from "next/link";
import { sidebarLinks } from "./Helper";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  //   const OpenSidebar = () => {
  //     setOpenSidebar(false);
  //   };
  //   const CloseSidebar = () => {
  //     setOpenSidebar(true);
  //   };

  return (
    <header className="bg-black py-4 shadow-xl">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-medium font-mono text-white">
            Logo
          </Link>
          <button
            onClick={() => setOpenSidebar(false)}
            className="bg-white px-4 py-1 rounded-lg font-medium font-mono text-lg"
          >
            Open Sidebar
          </button>
          <div
            onClick={() => setOpenSidebar(true)}
            className={`w-full h-full bg-black bg-opacity-70 transistion-all duration-500   fixed left-0 top-0 ${
              openSidebar ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          ></div>
          <div
            className={`bg-black px-2 fixed z-50  top-0 max-w-[300px] w-full h-full py-5 transition-all duration-500 ${
              openSidebar ? "!-right-[100%]" : "!right-0"
            }`}
          >
            <div className="flex items-center justify-between px-2">
              <Link href="/" className="text-xl font-medium font-mono text-white">
                Logo
              </Link>
              <div
                onClick={() => setOpenSidebar(true)}
                className="cursor-pointer rounded-xl text-2xl text-white"
              >
                &#10006;
              </div>
            </div>
            <ul className="mb-0 flex flex-col  py-5">
              {sidebarLinks.map((obj,i)=>{
                return(
              <li key={i}>
                <Link
                  href={obj.to}
                  onClick={() => setOpenSidebar(true)}
                  className="px-2 hover:bg-white hover:text-black w-full py-2 rounded-lg block transition-all duration-300 text-decoration-none text-lg font-medium font-mono text-white"
                >
                 {obj.link}
                </Link>
              </li>
                )
              })}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Sidebar;
