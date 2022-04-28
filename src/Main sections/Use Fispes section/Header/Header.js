import React from "react"
import style from "./Header.module.css"

const Header = () => {
    return (
        <div className={style.Header}>
            <div className={style.LargeTitle}>
                Who uses Frispes?
            </div>
            <div className={style.SmallTitle}>
                Big brands, small business, new startup and individuals
            </div>
        </div>
    )
}

export default Header