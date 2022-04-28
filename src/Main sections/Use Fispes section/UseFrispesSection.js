import React from "react"
import style from "./UseFrispesSection.module.css"
import Header from "./Header/Header";
import Content from "./Content/Content";

const UseFrispesSection = () => {
    return (
        <section className={style.UseFrispesSection}>
            <Header/>
            <Content/>
        </section>
    )
}

export default UseFrispesSection