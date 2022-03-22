import React from "react";
import Hexagon from "../icons/Hexagon/Hexagon";
import "./SidePane.css";
import Nbsp from "../typesetters/NBSP/Nbsp";
import { skills, mailTo } from "../data/data";

const SidePane = () => {
  return (
    <section className="side-pane b">
      <div className="side--margin-1">
        <ul className="side--ul">
          <li>
            <div className="side--container-1">
              <span className="t1">(619) 495-6738</span>
              <Nbsp />
              <Hexagon />
            </div>
          </li>
          <li>
            <div className="side--container-1">
              <a href={mailTo}>vincent.salinas.2022@gmail.com</a>
              <Nbsp />
              <Hexagon />
            </div>
          </li>
          <li>
            <div className="side--container-1">
              <span className="t1">
                2059 Lakeridge Circle Rd, Chula Vista, CA 91913
              </span>
              <Nbsp />
              <Hexagon />
            </div>
          </li>
          <li>
            <div className="side--container-1">
              <a
                className="t1"
                href="https://www.linkedin.com/in/vincent-salinas-24123a232/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <Nbsp />
              <Hexagon />
            </div>
          </li>
          <li>
            <div className="side--container-1">
              <a
                className="t1"
                href="https://heyimvincent.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Portfolio
              </a>
              <Nbsp />
              <Hexagon />
            </div>
          </li>
        </ul>
      </div>
      <div className="side--container-2 side--margin-1">
        <h3 className="main__header">education</h3>
        <p className="t2">June 2020</p>
        <p className="t2">Bachelors Of Science in Computer Science</p>
        <p className="t2">University of California, San Diego</p>
      </div>
      <div className="side--container-2 side--margin-1">
        <h3 className="main__header">key skills</h3>
        <ul className="side--ul">
          {skills.map((x) => (
            <li key={`side-${x.name}`}>
              <p className="t2">{x.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SidePane;
