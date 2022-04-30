import React from "react";
import style from "./FacilitiesSection.module.css";
import Header from "./Header/Header";
import Content from "./Content/Content";

const FacilitiesSection = () => {
  return (
    <section className={style.FacilitiesSection}>
      <Header />
      <Content />
    </section>
  );
};

export default FacilitiesSection;
