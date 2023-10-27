"use client";
import { Typewriter } from "react-simple-typewriter";
import "../app/styles/globals.css";
export default function navbar() {
  return (
    <nav className=" relative   p-10  pt-10 h-[20vh] sm:pt-20 flex justify-between">
      <div>
        <h1 className="text-logo text-2xl relative   sm:text-4xl relative    ">
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["ibrahim", "ibrahim"]}
            loop={100}
            cursor
            cursorStyle="●"
            typeSpeed={100}
            deleteSpeed={150}
            delaySpeed={1000}
          />
        </h1>
      </div>
      <div className="text-lg text-Grotesk relative  sm:text-3xl relative   ">
        <a href="" className="relative right-10">
          Home
        </a>
        <a href=" ">Contact me*</a>
      </div>
    </nav>
  );
}
