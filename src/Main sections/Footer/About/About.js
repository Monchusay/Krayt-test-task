import React from "react";
import style from "./About.module.css";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const About = () => {
  return (
    <div className={style.About}>
      <span className={style.AboutTitle}>Frispes</span>
      <span className={style.AboutText}>
        We offer comfortable spaces, cozy cafe, high-speed internet, spacious
        parking area and many more for your best workspaces and meetings
      </span>
      <span className={style.AboutIcons}>
        <AiFillInstagram className={style.AboutIcon} />
        <AiFillYoutube className={style.AboutIcon} />
        <FaFacebookF className={style.AboutIcon} />
      </span>
    </div>
  );
};

export default About;
