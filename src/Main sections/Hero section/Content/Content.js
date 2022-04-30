import React from "react";
import style from "./Content.module.css";

const Content = () => {
  return (
    <div className={style.Content}>
      <div className={style.Title}>
        <span className={style.Revolutionary}>Revolutionary </span>co-working
        space to realize your innovation
      </div>
      <div className={style.SubTitle}>
        In frispes, we spearhead new initiatives and provide mentorship to a new
        startup, and help grow their opportunities in key local, regional and
        global markets
      </div>
    </div>
  );
};

export default Content;
