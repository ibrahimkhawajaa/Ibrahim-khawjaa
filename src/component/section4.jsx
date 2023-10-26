
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import './contactus'

export default function section4() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className="">
      <section id="cd-timeline" class="cd-container">
      <div class="cd-timeline-block">
        <div class="cd-timeline-img cd-picture"></div>

        <div
          class="cd-timeline-content"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="2000"
        >
          <h2 className="">Education</h2>
          <div class="timeline-content-info">
            <span class="timeline-content-info-title">
              <i class="fa fa-certificate" aria-hidden="true"></i>
              LGS - School
            </span>

            <span class="timeline-content-info-date">
              <i class="fa fa-calendar-o" aria-hidden="true"></i>
              2020
            </span>
            <br />
            <span class="timeline-content-info-title">
              <i class="fa fa-certificate" aria-hidden="true"></i>
              Pgc - College
            </span>

            <span class="timeline-content-info-date">
              <i class="fa fa-calendar-o" aria-hidden="true"></i>
              2022
            </span>
          </div>
          <p>
            Classroom filled with diverse dreams and aspirations, there was an
            average student who had an extraordinary passion for technology.
            While their peers may have excelled in various subjects, this
            student found solace and inspiration in the world of wires,
            circuits, and algorithms.
          </p>
        </div>
      </div>

      <div class="cd-timeline-block">
        <div class="cd-timeline-img cd-movie"></div>

        <div
          class="cd-timeline-content"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="2000"
        >
          <h2>Experience</h2>
          <p>
            1. <b> 2+</b> years experince in Web/Design
          </p>
          <p>2. intership Devlab(LocalCompany)</p>
          <p>
            3.<b> Remote Work</b> Experience
          </p>
          <span class="cd-date">Jan 18</span>
        </div>
      </div>

      <div
        class="cd-timeline-block"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        data-aos-duration="2000"
      >
        <div class="cd-timeline-img cd-picture"></div>

        <div class="cd-timeline-content">
          <div>
            <h1>Work i can do </h1>
            <h4>Languages</h4>
            <p>Html/Css</p>
            <p>React.Js</p>
            <p>Tailwind/Bootstrap</p>
            <p>Npm.js</p>
          </div>

          <h4>Database</h4>
          <p>Mongodb/Sql</p>
          <h4>Extra</h4>
          <p>Git/Github</p>
          <p>Ux/Ui</p>
          <span class="cd-date">Jan 24</span>
        </div>
      </div>

      <div class="cd-timeline-block">
        <div class="cd-timeline-img cd-movie"></div>

        <div
          class="cd-timeline-content"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="2000"
        >
          <h2>Final Message</h2>
          <p>Hope we see Each Other.</p>
          <span class="cd-date">Feb 26</span>
        </div>
      </div>
    </section>
    </div>
  )
}
