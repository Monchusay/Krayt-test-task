import React from "react";
import style from "./TopMenu.module.css";

const TopMenu = () => {
  return (
    <div className={style.TopMenu}>
      <span className={style.Frispes}>Frispes.</span>
      <div className={style.Menu}>
        <span className={style.MenuItem}>Home</span>
        <span className={style.MenuItem}>Workspace</span>
        <span className={style.MenuItem}>Service</span>
        <span className={style.MenuItem}>Events</span>
        <span className={style.MenuItem}>Reviews</span>
        <span className={style.MenuItem}>Contact Us</span>
      </div>
      <div className={style.Login}>
        Log In
        <button className={style.SignUpButton}>Sign Up</button>
      </div>
    </div>
  );
};
export default TopMenu;
