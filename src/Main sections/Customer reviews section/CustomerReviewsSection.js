import React from "react";
import style from "./CustomerReviewsSection.module.css";
import Header from "./Header/Header";
import Reviews from "./Reviewes/Reviews";
import Indicator from "./Indicator/Indicator";

const CustomerReviewsSection = () => {
  return (
    <div className={style.CustomerReviewsSection}>
      <Header />
      <Reviews />
      <Indicator />
    </div>
  );
};

export default CustomerReviewsSection;
