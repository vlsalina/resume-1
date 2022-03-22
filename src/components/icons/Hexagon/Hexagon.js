import React from "react";
import "./Hexagon.css";
import { BsHexagonFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const Hexagon = () => {
  return (
    <IconContext.Provider value={{ className: "icons" }}>
      <BsHexagonFill />
    </IconContext.Provider>
  );
};

export default Hexagon;
