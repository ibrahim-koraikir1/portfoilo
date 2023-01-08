import { useState } from "react";
import ibrahim from "../assets/ibrahim.pdf";
export default function Nav() {
  const [open, setOpen] = useState(false);

  const heandelclick = (next) => {
    setOpen((prv) => !prv);
    console.log(open);
  };

  return (
    <div>
      <div className=" overflow-hidden mx-12 w-full flex justify-between items-center mt-[3rem] max-w-5xl  md:mx-auto">
        <div className="cursor-pointer group hover:bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <a href="gmail.com"> ibrahimkoraikir1@gmail.com </a>
        </div>
        <div className={" hidden md:flex gap-36 items-center "}>
          <ul className="flex justify-between items-start gap-[5rem]">
            <li className=' font-bold cursor-pointer relative before:absolute before:content-[".01"] before:right-[3rem]  before:text-gray-600'>
              work
            </li>
            <li className=' font-bold cursor-pointer relative before:absolute before:content-[".02"] before:right-[3rem]  before:text-gray-600'>
              about
            </li>
            <li className=' font-bold cursor-pointer relative before:absolute before:content-[".03"] before:right-[4rem] before:text-gray-600 '>
              contact
            </li>
          </ul>
          <button
            onClick={() => console.log(333)}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
          >
            <a
              href={ibrahim}
              download="ibrahim"
              className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
            >
              download cv
            </a>
          </button>
        </div>
        <button className="md:hidden" onClick={() => heandelclick()}>
          click
        </button>
      </div>
    </div>
  );
}
