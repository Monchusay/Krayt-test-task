import React from "react";
import style from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={style.AboutUs}>
      <div className={style.AboutUsHeader}>
        <div>Why Frispes</div>
        <div className={style.AboutUsHeaderRectangle}></div>
      </div>
      <span className={style.AboutUsTitle}>
        We revolutionize your workspace
      </span>
      <div className={style.AboutUsText}>
        With a decade of insights and expertise, we're decided to reimagine
        co-working space, designed to help a new startup grow up and realize
        their ideas so they can give a positive impacts on many people
      </div>
    </div>
  );
};

export default AboutUs;
