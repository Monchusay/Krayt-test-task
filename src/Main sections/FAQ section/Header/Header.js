import React from "react"
import style from "./Header.module.css"

const Header = () => {
    return (
        <div className={style.Header}>
            <span className={style.Title}>
            Find the answers to anything you need in our Help Center
            </span>
        </div>
    )
}

export default Header