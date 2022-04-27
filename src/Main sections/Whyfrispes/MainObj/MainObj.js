import React from "react";
import style from "./MainObj.module.css";
import { BsPeople, BsFlag, BsHandThumbsUp } from "react-icons/bs";
import { MdOutlineCelebration } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { BiConversation } from "react-icons/bi";

const MainObj = () => {
  return (
    <div className={style.MainObj}>
      <div className={style.MainObjItem}>
        <div className={style.MainObjItemIcon}>
          <BsPeople className={style.Icon} />
        </div>
        <div className={style.MainObjItemContent}>
          <div className={style.MainObjItemContentHeader}>500+</div>
          <div className={style.MainObjItemContentText}>Meeting rooms</div>
        </div>
      </div>
      <div className={style.MainObjItem}>
        <div className={style.MainObjItemIcon}>
          <BsFlag className={style.Icon} />
        </div>
        <div className={style.MainObjItemContent}>
          <div className={style.MainObjItemContentHeader}>60+</div>
          <div className={style.MainObjItemContentText}>Countries</div>
        </div>
      </div>
      <div className={style.MainObjItem}>
        <div className={style.MainObjItemIcon}>
          <BsHandThumbsUp className={style.Icon} />
        </div>
        <div className={style.MainObjItemContent}>
          <div className={style.MainObjItemContentHeader}>5K+</div>
          <div className={style.MainObjItemContentText}>Startup mentors</div>
        </div>
      </div>
      <div className={style.MainObjItem}>
        <div className={style.MainObjItemIcon}>
          <MdOutlineCelebration className={style.Icon} />
        </div>
        <div className={style.MainObjItemContent}>
          <div className={style.MainObjItemContentHeader}>100+</div>
          <div className={style.MainObjItemContentText}>Event spaces</div>
        </div>
      </div>
      <div className={style.MainObjItem}>
        <div className={style.MainObjItemIcon}>
          <AiOutlineWifi className={style.Icon} />
        </div>
        <div className={style.MainObjItemContent}>
          <div className={style.MainObjItemContentHeader}>500 Mbps</div>
          <div className={style.MainObjItemContentText}>Internet speed</div>
        </div>
      </div>
      <div className={style.MainObjItem}>
        <div className={style.MainObjItemIcon}>
          <BiConversation className={style.Icon} />
        </div>
        <div className={style.MainObjItemContent}>
          <div className={style.MainObjItemContentHeader}>200+</div>
          <div className={style.MainObjItemContentText}>Communities inside</div>
        </div>
      </div>
    </div>
  );
};

export default MainObj;
