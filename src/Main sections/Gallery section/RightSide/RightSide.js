import React from "react";
import style from "./RightSide.module.css";
import GrayArrow from "./Group 2.svg";
import OrangeArrow from "./Group 1.svg";

const RightSide = () => {
  return (
    <div className={style.RightSide}>
      <div className={style.RightSideTitle}>
        <div className={style.SmallTitle}>
          Frispes gallery
          <div className={style.SmallTitleRectangle}></div>
        </div>
        <div className={style.LargeTitle}>
          Immersive beautiful co-working space gallery
        </div>
        <div className={style.NavElements}>
          <img src={GrayArrow} />
          <img src={OrangeArrow} />
        </div>
      </div>
      <div className={style.RightSideImages}>
        <div className={style.RightSideImage1}></div>
        <div className={style.RightSideImage2}></div>
      </div>
    </div>
  );
};

export default RightSide;
