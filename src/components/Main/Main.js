import React from "react";
import "./Main.css";
import { projects } from "../data/data";
import Card from "../Card/Card";

const Main = () => {
  return (
    <main className="main c">
      <div className="main--box-1">
        <div>
          <h3 className="main__header">career objectives</h3>
        </div>
        <div>
          <p className="main--font-styling-1">
            University of California, San Diego graduate and aspiring web
            developer with a foundation in cross-platform coding. Seeking to
            leverage skills in collaboration, communication, and development.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h3 className="main__header">experience</h3>
        </div>
        <div>
          <ul className="main--ul-1">
            {projects.map((data) => (
              <li key={`main-${data.name}`}>
                <Card data={data} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Main;
