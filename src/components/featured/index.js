import React from "react";
import { VISITED_FEATURED_TITLES } from "../../constants";
import { v4 as uuidv4 } from "uuid";

/**
 *  Компонент отвечает за вывод главных новостей
 */

const Featured = (props) => {
  return (
    <div>
      {VISITED_FEATURED_TITLES.map((title) => (
        <span id={uuidv4()}>{title}</span>
      ))}
    </div>
  );
};

export default Featured;
