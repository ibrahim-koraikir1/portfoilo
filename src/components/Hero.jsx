import React from "react";
import man from "../assets/man.svg";

export default function Hero() {
  return (
    <div className=" text-center md:text-start md:flex  justify-center mx-auto md:justify-between max-w-5xl ">
      <div className=" flex-1  w-full">
        <h1 className="text-4xl leading-snug mt-28 font-bold ">
          <span className="spanblac">
            {" "}
            I’m a <span>Self-Taught Developer</span>
          </span>
          <span className="spanblac"> who builds immersive and</span>
          ueser-friendly <span className="under"> appplications .</span>
        </h1>
        <button className="relative mt-10 inline-flex items-center justify-center p-0.5 md:mb-2 md:mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            get in tutch 🡶
          </span>
        </button>
      </div>
      <div className=" hidden md:block flex-1 w-full  pl-10">
        <img src={man} className="w-[30rem] mt-[-6rem]" />
      </div>
    </div>
  );
}
