import React from "react"
import style from "./Indicator.module.css"
import IndicatorImg from "./Indicator.svg"

const Indicator = () => {
    return (
        <div className={style.Indicator}>
            <img src={IndicatorImg} className={style.IndicatorImg}/>
        </div>
    )
}

export default Indicator