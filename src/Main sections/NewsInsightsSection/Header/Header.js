import React from "react"
import style from "./Header.module.css"
import {MdKeyboardArrowRight} from "react-icons/md"

const Header = () => {
    return (
        <div className={style.Header}>
            <div className={style.Title}>
                News, events and insights for you
            </div>
            <div className={style.SeeMore}>
                See more
                <MdKeyboardArrowRight className={style.SeeMoreArrow}/>
            </div>
        </div>
    )
}

export default Header