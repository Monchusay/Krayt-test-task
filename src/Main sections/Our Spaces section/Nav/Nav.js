import React from "react";
import style from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={style.Nav}>
      <div className={style.NavRectangles}>
        <div className={style.NavOrangeRectangle}></div>
        <div className={style.NavGrayRectangle}></div>
      </div>
        <span className={style.NavCounter}>01 / 04</span>
    </div>
  );
};

export default Nav;
