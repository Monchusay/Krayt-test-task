import React from "react";
import style from "./Whyfrispes.module.css";
import MainObj from "./MainObj/MainObj";
import AboutUs from "./AboutUs/AboutUs";

const Whyfrispes = () => {
  return (
    <div className={style.Whyfrispes}>
      <MainObj />
      <AboutUs />
    </div>
  );
};

export default Whyfrispes;
