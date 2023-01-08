import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ projct }) {
  const navigate = useNavigate();

  const heandelclick = () => {
    return navigate(`/${projct.id}`);
  };

  return (
    <article
      onClick={heandelclick}
      key={projct.id}
      className="flex flex-col w-[60rem] shadow-xl mx-auto max-w-sm bg-red-100 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer h-[30rem] rounded-md"
    >
      <div className="text-xl font-bold uppercase">{projct.name}</div>
      <div className="h-full">
        <img
          className="mx-auto absolute top-0 left-0 bottom-0 h-full w-full object-contain"
          src={projct.img}
          alt=""
        />
      </div>
      <h1 className="font-extrabold text-6xl z-50  text-gray-800">
        0{projct.number}.
      </h1>
    </article>
  );
}
