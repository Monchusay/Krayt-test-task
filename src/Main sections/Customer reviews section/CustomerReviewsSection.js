import React from "react"
import style from "./CustomerReviewsSection.module.css"
import Header from "./Header/Header";
import Reviews from "./Reviewes/Reviews";
import Indicator from "./Indicator.svg"

const CustomerReviewsSection = () => {
    return (
        <div className={style.CustomerReviewsSection}>
            <Header/>
            <Reviews/>
            <img src={Indicator}/>
        </div>
    )
}

export default CustomerReviewsSection