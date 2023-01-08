import React from "react";
import { useState } from "react";
import man from "../assets/man.svg";
import Card from "./Card";
import { projct } from "./data/data";

export default function Work() {
  const [toggle, settoggle] = useState(4);
  return (
    <div className="w-full max-w-5xl mx-auto mb-20  flex flex-col gap-10 ">
      <h1 className=" text-center mt-20 text-5xl md:flex font-DynaPuff md:mt-[-1rem] md:mb-10  ">
        {" "}
        <span
          className=" text-5xl transform rotate-180 text-center"
          style={{ writingMode: "vertical-rl" }}
        >
          01{" "}
        </span>{" "}
        — work{" "}
      </h1>
      <ul className="flex justify-between flex-wrap w-full h-full  gap-5">
        {projct.slice(0, toggle).map((projct) => {
          return (
            <>
              <Card projct={projct} />
            </>
          );
        })}
      </ul>
      <div className="text-center">
        {toggle <= 4 ? (
          <button
            className=" bg-slate-100 px-10 py-4 rounded "
            onClick={() => settoggle(5)}
          >
            show more
          </button>
        ) : (
          <button
            className=" bg-slate-100 px-10 py-4 rounded "
            onClick={() => settoggle(4)}
          >
            show less
          </button>
        )}
      </div>
    </div>
  );
}
