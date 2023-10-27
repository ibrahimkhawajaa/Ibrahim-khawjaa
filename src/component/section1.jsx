"use client";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

import "../app/styles/globals.css";
import Face from './Img/Facepic.jpg'

export default function section1() {
  return (
    <div className="section-1 flex flex-row justify-around items-center flex-wrap w-auto h-auto m-10  pb-[100px] ">
      <div className="text-Grotesk">
        <h1 className="text-7xl sm:text-9xl">- Hey</h1>
        <br />
        <h1 className="text-5xl sm:text-7xl">
          I'm{" "}
          <span className="text-3xl bg-[#F4CE14] sm:text-5xl">
          <Typewriter
            words={['ibrahim', 'Dev', 'Ux/Ui']}
            loop={2000}
            cursor
            cursorStyle='●'
            typeSpeed={120}
            deleteSpeed={90}
            delaySpeed={1000}
       
          />
          </span>
        </h1>
        <h1 className="pt-10 text-3xl underline sm:text-4xl">
          Seeing things from my own eye
        </h1>
      </div>
      
      <div className="face w-full pt-20 sm:w-96">
<Image src={Face} placeholder="blur"/>
      </div>
    </div>
  );
}
