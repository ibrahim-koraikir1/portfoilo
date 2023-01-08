import React from "react";
import me from "../assets/me.png";
import blob from "../assets/blob.svg";
import { FaQuoteLeft } from "react-icons/fa";
export default function About() {
  return (
    <div className="w-full max-w-5xl mx-auto  h-full my-[10rem] lg:h-screen ">
      <h1 className="text-center mt-20 mb-11 text-5xl md:flex font-DynaPuff   ">
        {" "}
        <span
          className=" text-5xl transform rotate-180 text-center"
          style={{ writingMode: "vertical-rl" }}
        >
          02{" "}
        </span>{" "}
        — about{" "}
      </h1>

      <div className="flex justify-center  ">
        <img className=" ibr w-[14rem] h-[14rem]  rounded-full " src={me} />
      </div>

      <div className="flex justify-center">
        <h1 className="flex flex-col text-6xl DynaPuff mr-[-3rem] font-medium">
          {" "}
          <span className="ml-[-9rem] font-DynaPuff">ibrahim</span>{" "}
          <span className="mr-[-6rem] font-DynaPuff">koraikir</span>
        </h1>
      </div>

      <div className=" md:flex mx-14  mt-10 gap-8 justify-between md:gap-16 md:mt-26">
        <div className="text-xl capitalize text-gray-700">
          i am a web developer i have a background in frontend/jam-stak
          development and api services. i enjoy collaborating with desingners
          and developers in collerively building user-frindly products that
          produce business value.
        </div>
        <div className="text-xl mt-10 capitalize text-gray-700">
          &#8220; when i am not online, i can be found at meetups, learning
          about the latest updates in the world of web technology , or play
          football with friends on good day &#8220;
        </div>
      </div>
    </div>
  );
}
