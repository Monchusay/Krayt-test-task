import React from "react";
import style from "./Content.module.css";

const Content = () => {
  return (
    <div className={style.Content}>
      <div className={style.Spaces}>
        <span className={style.Header}>Spaces</span>
        <div className={style.List}>
          <span className={style.ListElement}>Co-working spaces</span>
          <span className={style.ListElement}>Meeting rooms</span>
          <span className={style.ListElement}>Event spaces</span>
          <span className={style.ListElement}>Child playground</span>
          <span className={style.ListElement}>Cafe & rest</span>
        </div>
      </div>
        <div className={style.Company}>
            <span className={style.Header}>Company</span>
            <div className={style.List}>
                <span className={style.ListElement}>About Us</span>
                <span className={style.ListElement}>Pricing</span>
                <span className={style.ListElement}>Careers</span>
                <span className={style.ListElement}>Press</span>
            </div>
        </div>
        <div className={style.Support}>
            <span className={style.Header}>Support</span>
            <div className={style.List}>
                <span className={style.ListElement}>FAQs</span>
                <span className={style.ListElement}>Privacy Policy</span>
                <span className={style.ListElement}>Help</span>
            </div>
        </div>
        <div className={style.ContactUs}>
            <span className={style.Header}>Contact Us</span>
            <div className={style.List}>
                <span className={style.ListElement}>E.  Hello@frispes.com</span>
                <span className={style.ListElement}>A.  Jalan Jayakatwang  No.301
     Ngasem, Kediri</span>
                <span className={style.ListElement}>P.  (+62) 82334670000</span>
            </div>
        </div>
    </div>
  );
};

export default Content;
