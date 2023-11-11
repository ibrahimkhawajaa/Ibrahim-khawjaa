import Image from "next/image";
import Img1 from "./Img/wa.svg";

export default function section2() {
  return (
    <div className="border-t border-black border-b flex justify-around items-center flex-wrap w-auto h-auto h-screen   ">
      <div className="  ">
        <Image src={Img1} />
      </div>
      <div className="text-center  w-full sm:w-1/2  ">
        <h1 className=" text-[#90EE20] text-6xl  text-Grotesk sm:text-8xl ">Who am i?</h1>
        <p className="text-center text-Neue text-2xl   sm:text-5xl ">
          {" "}
          I'm <b  className="underline">Ibrahim</b>, a <b>React Developer</b> with over{" "}
          <b className="underline"> 2+ years</b> of professional experience in the world of web
          development. My journey in this <b  className="underline"> field</b> has been a{" "}
          <b  className="underline"> passionate pursuit</b>, marked by countless lines of code,
          creative solutions, and a deep dedication to the art of crafting
          <b className="underline"> web applications</b>.
        </p>
      </div>
    </div>
  );
}
