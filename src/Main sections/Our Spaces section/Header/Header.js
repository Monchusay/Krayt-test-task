import React from "react";
import style from "./Header.module.css";
import GrayArrow from "./Group 2.svg";
import OrangeArrow from "./Group 1.svg";

const Header = () => {
  return (
    <div className={style.Header}>
      <span className={style.Title}>Our Spaces</span>
      <div className={style.Content}>
        Our space is designed to give you a different experience when working
        with your team or personally
      </div>
      <div className={style.Nav}>
        <div>
          <img src={GrayArrow} />
        </div>
        <div>
          <img src={OrangeArrow} />
        </div>
      </div>
    </div>
  );
};

export default Header;
