import React from "react";
import style from "./NewsInsightsSection.module.css";
import Header from "./Header/Header";
import News from "./News/News";

const NewsInsightsSection = () => {
  return (
    <div className={style.NewsInsightsSection}>
      <Header />
      <News />
    </div>
  );
};

export default NewsInsightsSection;
