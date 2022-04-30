import React from "react";
import style from "./Footer.module.css";
import About from "./About/About";
import Content from "./Content/Content";

const Footer = () => {
  return (
    <section className={style.Footer}>
      <About />
      <Content />
    </section>
  );
};

export default Footer;
