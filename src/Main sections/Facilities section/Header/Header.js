import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.Header}>
      <div className={style.SmallTitle}>
        Our Facilities
        <div className={style.SmallTitleRectangle}></div>
      </div>
      <div className={style.LargeTitle}>
        All facilities are designed to meet all your needs
      </div>
    </div>
  );
};

export default Header;
