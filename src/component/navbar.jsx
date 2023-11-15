"use client";
import { Typewriter } from "react-simple-typewriter";
import "../app/styles/globals.css";
export default function navbar() {
  return (
    <nav className=" relative   p-10  pt-10 h-[20vh] sm:pt-20 flex justify-between text-center">
      <div>
        <h1 className="text-logo text-2xl relative right-[30px] sm:text-5xl  xl:relative    ">
       Ibrahim
     
        </h1>
      </div>
      <div className="text-lg text-Grotesk relative  sm:text-3xl relative   ">
        <a href="/" className="relative right-10">
          Home
        </a>
        <a href="#end" className="bg-[#90EE20] text-white p-1.5 rounded-xl px-2 py-2" >Contact me*</a>
      </div>
    </nav>
  );
}
