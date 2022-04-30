import React from "react";
import style from "./Content.module.css";
import GoogleLogo from "./GoogleLogo.svg";
import MicrosoftLogo from "./MicrosoftLogo.svg";
import ShopifyLogo from "./ShopifyLogo.svg";
import StripeLogo from "./StripeLogo.svg";
import TokopediaLogo from "./TokopediaLogo.svg";
import UpworkLogo from "./UpworkLogo.svg";

const Content = () => {
  return (
    <div className={style.Content}>
      <img src={GoogleLogo} className={style.GoogleLogo} />
      <img src={TokopediaLogo} className={style.TokopediaLogo} />
      <img src={UpworkLogo} className={style.UpworkLogo} />
      <img src={MicrosoftLogo} className={style.MicrosoftLogo} />
      <img src={ShopifyLogo} className={style.ShopifyLogo} />
      <img src={StripeLogo} className={style.StripeLogo} />
    </div>
  );
};

export default Content;
