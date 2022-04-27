import React from "react";
import style from "./Header.module.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

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
          <AiOutlineArrowLeft className={style.GrayArrow} />
        </div>
        <div>
          <AiOutlineArrowRight className={style.OrangeArrow} />
        </div>
      </div>
    </div>
  );
};

export default Header;
