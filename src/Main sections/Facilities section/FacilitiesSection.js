import React from "react"
import style from "./FacilitiesSection.module.css"
import Header from "./Header/Header";
import Content from "./Content/Content";

const FacilitiesSection = () => {
    return (
        <div className={style.FacilitiesSection}>
            <Header/>
            <Content/>
        </div>
    )
}

export default FacilitiesSection