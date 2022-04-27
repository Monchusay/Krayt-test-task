import React from "react";
import style from "./Content.module.css";

const Content = () => {
  return (
    <div className={style.Content}>
      <div className={style.ContentList}>
        <span className={style.ContentListElement}>Spacious parking area</span>
        <span className={style.ContentListElement}>Comfortable spaces</span>
        <span className={style.ContentListElement}>Cozy cafe</span>
        <span className={style.ContentListElement}>Child playground</span>
        <span className={style.ContentListElement}>Outdoor spaces</span>
      </div>
        <div className={style.ContentImage}>

        </div>
    </div>
  );
};

export default Content;
