import React from "react";
import { MENU_ITMES } from "../../constants";
import { v4 as uuidv4 } from "uuid";

/**
 * Компонент отвечает за вывод меню
 */

const MenuItmes = () => {
  return (
    <div>
      {MENU_ITMES.map((item) => (
        <span key={uuidv4()}>{item}</span>
      ))}
    </div>
  );
};

export default MenuItmes;
