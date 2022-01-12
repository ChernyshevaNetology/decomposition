import React from "react";
import { NEWS_TITLES } from "../../constants";
import { v4 as uuidv4 } from "uuid";

/**
 * Компонент отвечает за вывод новостных заголовков
 */

const NewsTitles = () => {
  return (
    <div>
      {NEWS_TITLES.map((title) => (
        <span id={uuidv4()}>{title}</span>
      ))}
    </div>
  );
};

export default NewsTitles;
