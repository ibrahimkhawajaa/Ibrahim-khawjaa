"use client";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
export default function section3() {
  useEffect(() => {
    // Initialize AOS library
    AOS.init({
      // settings here, e.g., duration, delay, etc.
      duration: 200,
    });
  }, []);
  return (
    <div>
      <section id="cd-timeline" class="cd-container ">
        <div class="cd-timeline-block   overflow: hidden;">
          <div class="cd-timeline-img cd-picture"></div>

          <div
            class="cd-timeline-content"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="3000"
          >
            <h2 class="text-white">Education</h2>
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
            <p class="text-white">
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
            data-aos-duration="3000"
          >
            <h2 class="text-white">Experience</h2>
            <p>
              1. <b> 2+</b> years experience in Web/Design
            </p>
            <p>2. intership Devlab(LocalCompany)</p>
            <p>
              3.<b> Remote Work</b> Experience
            </p>
          </div>
        </div>

        <div class="cd-timeline-block">
          <div class="cd-timeline-img cd-picture"></div>

          <div
            class="cd-timeline-content "
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="3000"
          >
            <div>
              <h1 class="text-white text-2xl text-Grotesk">Work i can do</h1>
              <h4 class="text-white">Languages</h4>
              <p>Html/Css</p>
              <p>React.Js</p>
              <p>Tailwind/Bootstrap</p>
              <p>Npm.js</p>
            </div>

            <h4 class="text-white">Database</h4>
            <p>Mongodb/Sql</p>
            <h4 class="text-white">Extra</h4>
            <p>Git/Github</p>
            <p>Ux/Ui</p>
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
            <h2 class="text-white">Final Message</h2>
            <p class="text-white">Hope we see Each Other.</p>
          </div>
        </div>
      </section>

      <script>AOS.init();</script>
    </div>
  );
}
