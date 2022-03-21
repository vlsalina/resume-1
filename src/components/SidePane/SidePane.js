import React from "react";
import Hexagon from "../icons/Hexagon/Hexagon";
import "./SidePane.css";
import Nbsp from "../typesetters/NBSP/Nbsp";

const SidePane = () => {
  return (
    <section className="side-pane b">
      <div className="side--margin-1">
        <ul>
          <li>
            <div className="side--container-1">
              <span className="t1">(619) 495-6738</span>
              <Nbsp />
              <Hexagon />
            </div>
          </li>
          <li>
            <div className="side--container-1">
              <span className="t1">vincent.salinas.2022@googlemail.com</span>
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
              >
                LinkedIn
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
        <ul>
          <li>
            <p className="t2">HTML</p>
          </li>
          <li>
            <p className="t2">CSS</p>
          </li>
          <li>
            <p className="t2">Javascript</p>
          </li>
          <li>
            <p className="t2">MongoDB</p>
          </li>
          <li>
            <p className="t2">Express.js</p>
          </li>
          <li>
            <p className="t2">React.js</p>
          </li>
          <li>
            <p className="t2">Node.js</p>
          </li>
          <li>
            <p className="t2">Mongoose</p>
          </li>
          <li>
            <p className="t2">Redux</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SidePane;
