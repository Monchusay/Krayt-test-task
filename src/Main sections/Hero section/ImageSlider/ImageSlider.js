import React from "react";
import style from "./ImageSlider.module.css"

const ImageSlider = () => {
    return (
        <div className={style.ImageSlider}>
            <div className={style.BigRectangle}></div>
            <div className={style.SmallRectangle}></div>
            <div className={style.SmallRectangle}></div>
            <div className={style.SmallRectangle}></div>
        </div>
    )
}

export default ImageSlider