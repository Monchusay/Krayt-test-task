import React from "react";
import style from "./HeroSection.module.css";
import TopMenu from "./TopMenu/TopMenu";
import Intro from "./Intro/Intro";
import Content from "./Content/Content";
import ImageSlider from "./ImageSlider/ImageSlider";

const HeroSection = () => {
  return (
    <section className={style.HeroSection}>
      <TopMenu />
      <Intro />
      <Content />
      <ImageSlider />
    </section>
  );
};

export default HeroSection;
