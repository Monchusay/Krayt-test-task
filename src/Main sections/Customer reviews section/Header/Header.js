import React from "react";
import style from "./Header.module.css";
import GrayArrow from "./Group 2.svg";
import OrangeArrow from "./Group 1.svg";

const Header = () => {
  return (
    <div className={style.Header}>
      <div className={style.Titles}>
        <div className={style.SmallTitle}>
          Reviews
          <div className={style.SmallTitleRectangle}></div>
        </div>
        <span className={style.LargeTitle}>What our customers are saying</span>
      </div>
      <div className={style.NavElements}>
        <img src={GrayArrow} className={style.GrayArrow} />
        <img src={OrangeArrow} className={style.OrangeArrow} />
      </div>
    </div>
  );
};

export default Header;
