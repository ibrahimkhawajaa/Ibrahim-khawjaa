
 import Section2 from "@/component/section2";
 import Section1 from "@/component/section1";
import Section3 from "@/component/section3";
  import Navbar from "@/component/navbar";
export default function Home() {
  return (
    <>
    <h1>helllo</h1>
      <div className="section-1">
      <Navbar />
         
        <Section1 /> 
      </div>
       <Section2/>


  <Section3/> 

    </>
  );
}
