import { Typewriter } from "react-simple-typewriter";
import "../app/globals.css";
export default function section1() {
  return (
    <div className="flex flex-row justify-around items-center flex-wrap w-auto h-auto m-10  ">
      <div className="text-Grotesk">
        <h1 className="text-7xl sm:text-9xl">- Hey</h1>
        <br />
        <h1 className="text-5xl sm:text-7xl">I'm <span className="text-3xl bg-[#F4CE14] sm:text-5xl"><Typewriter
          words={["Ibrahim", "Dev", "Ux/Ui"]}
          loop={1000}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
     
        /></span></h1>
        <h1 className="pt-10 text-3xl underline sm:text-4xl">Seeing things from my own eye</h1>
      </div>
      <div className="w-full pt-20 sm:w-1/3">
        <img src="./img/facepic.jpg" alt="" />
      </div>
    </div>
  );
}
