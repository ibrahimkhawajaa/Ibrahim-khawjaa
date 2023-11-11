import Section2 from "@/component/section2";
import Section1 from "@/component/section1";
import Section3 from "@/component/section3";
import Section4 from "@/component/section4";
import Cursor from "@/component/cursor";
import Navbar from "@/component/navbar";


export default function Home() {

  return (
    <>
      <Cursor />
      <div className="section-1">
        <Navbar />
        <Section1 />
      </div>
      <Section2 />
      <Section3 />
      <div>
        <Section4 />
      </div>
    </>
  );
}
