import React from "react";
import style from "./News.module.css";

const News = () => {
  return (
    <div className={style.News}>
      <div className={style.PrimaryNews}>
        <div className={style.PrimaryNewsImage}></div>
        <div className={style.PrimaryNewsText}>
          <span className={style.PrimaryNewsTextHeader}>
            Google I / O 2020 news update
          </span>
          <span className={style.PrimaryNewsTextContent}>
            Out of concern for the health and safety of our developers,
            employees, and local communities — and in line with recent ...
          </span>
          <div className={style.PrimaryNewsTextAuthor}>
            <div className={style.PrimaryNewsTextAuthorImg}></div>
            <div className={style.PrimaryNewsTextAuthorName}>
              <span className={style.Name}>Sundar pichai</span>
              <span className={style.Work}>CEO at Google</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.News1}>
        <div className={style.News1Image}></div>
        <div className={style.NewsContent}>
          <span className={style.NewsContentHeader}>
            Minimal workspace for inspirations
          </span>
          <span className={style.NewsContentAuthor}>Anthony Masional</span>
        </div>
      </div>
      <div className={style.News2}>
        <div className={style.News2Image}></div>
        <div className={style.NewsContent}>
          <span className={style.NewsContentHeader}>
            Does productivity increase when working remotely ?{" "}
          </span>
          <span className={style.NewsContentAuthor}>Franck Martin</span>
        </div>
      </div>
      <div className={style.News3}>
        <div className={style.News3Image}></div>
        <div className={style.NewsContent}>
          <span className={style.NewsContentHeader}>
            Morning routine to boost your mood
          </span>
          <span className={style.NewsContentAuthor}>Elizabeth Swan</span>
        </div>
      </div>
      <div className={style.News4}>
        <div className={style.News4Image}></div>
        <div className={style.NewsContent}>
          <span className={style.NewsContentHeader}>
            5+ tips to find comfortable co-working space
          </span>
          <span className={style.NewsContentAuthor}>Mykola Ilschenko</span>
        </div>
      </div>
    </div>
  );
};

export default News;
