import React from "react"
import style from "./FAQSection.module.css"
import Header from "./Header/Header";
import Boxes from "./Boxes/Boxes";

const FAQSection = () => {
    return (
        <section className={style.FAQSection}>
            <Header/>
            <Boxes/>
        </section>
    )
}

export default FAQSection