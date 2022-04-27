import React from "react"
import style from "./OurSpacesSection.module.css"
import Header from "./Header/Header";
import SpaceCards from "./Space Cards/SpaceCards";
import Nav from "./Nav/Nav";

const OurSpacesSection = () => {
    return (
        <section className={style.OurSpacesSection}>
            <Header/>
            <SpaceCards/>
            <Nav/>
        </section>
    )
}

export default OurSpacesSection