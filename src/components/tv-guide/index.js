import React from "react";
import { TV_TITLES } from "../../constants";
import { v4 as uuidv4 } from "uuid";

const TVGuide = () => {
  return (
    <div>
      {TV_TITLES.map((title) => (
        <span id={uuidv4()}>{title}</span>
      ))}
    </div>
  );
};

export default TVGuide;
