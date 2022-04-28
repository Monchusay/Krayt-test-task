import React from "react";
import style from "./LeftSide.module.css";

const LeftSIde = () => {
  return (
    <div className={style.LeftSIde}>
      <div className={style.SideImage}></div>
      <div className={style.MainImage}></div>
    </div>
  );
};

export default LeftSIde;
