import React from "react";
import style from "./GallerySection.module.css";
import LeftSIde from "./LeftSide/LeftSIde";
import RightSide from "./RightSide/RightSide";

const GallerySection = () => {
  return (
    <section className={style.GallerySection}>
      <LeftSIde />
      <RightSide />
    </section>
  );
};
export default GallerySection;
