"use client";
import Section2 from "@/component/section2";
import Section1 from "@/component/section1";
import Navbar from "@/component/navbar";
export default function Home() {
  return (
    <>
      <div className="section-1">
        <Navbar />
        <Section1 />
      </div>
<Section2/>
    </>
  );
}
