"use client";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

import "../app/styles/globals.css";
import Arrow from './Img/Arrow.png'
import Face from './Img/Facepic.jpg'

export default function section1() {
  return (
    <div className="section-1 flex flex-row justify-around items-center flex-wrap w-auto h-auto m-10  pb-[100px] ">
      <div className="text-Grotesk">
        <h1 className="text-7xl sm:text-9xl">- Hey</h1>
        <br />
        <h1 className="text-5xl sm:text-7xl">
          I'm{" "}
          <span className="text-3xl bg-[#90EE90] sm:text-5xl">
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
      <Image src={Arrow} alt="" className="w-6/12 relative top-[70px] arrow"/>
      </div>
      
      <div className="face w-full pt-[150px] sm:w-5/12 ">
<Image src={Face} placeholder="blur" className="rounded-4xl"/>
      </div>
    </div>
  );
}
