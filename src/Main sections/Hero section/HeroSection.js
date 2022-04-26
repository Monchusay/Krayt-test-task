import React from "react";
import style from "./HeroSection.module.css";
import TopMenu from "./TopMenu/TopMenu";

const HeroSection = () => {
  return (
    <div className={style.HeroSection}>
      <TopMenu/>
    </div>
  );
};

export default HeroSection;
