"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
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
            <TypeAnimation
              sequence={[
                2000,
                "Ibrahim", // Types 'One'
                2000, // Waits 1s
                "Dev", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Ux/Ui",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="typer"
            />{" "}
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
