import React from "react";
import "./TopPane.css";

const TopPane = () => {
  return (
    <section className="top-pane a">
      <div>
        <h1 className="name">
          vincent <span className="lastname">salinas</span>
        </h1>
      </div>
      <div>
        <p className="title">Web Developer</p>
      </div>
    </section>
  );
};

export default TopPane;
