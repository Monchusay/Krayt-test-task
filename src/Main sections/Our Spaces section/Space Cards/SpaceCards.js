import React from "react";
import style from "./SpaceCards.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const SpaceCards = () => {
  return (
    <div className={style.SpaceCards}>
      <div className={style.Space1}>
        <div className={style.Space1Background}>
          <button className={style.SpaceButton}>
            <MdKeyboardArrowRight className={style.SpaceArrow} />
          </button>
        </div>
        <span className={style.SpaceTitle}>Working with team</span>
      </div>
      <div className={style.Space2}>
        <div className={style.Space2Background}>
          <span className={style.Space2Title}>Private Space</span>
          <span className={style.Space2Content}>
            Comfortable space, Full speed wifi, Free coffee & Snack and many
            more
          </span>
        </div>
        <div className={style.Space2ButtonBackground}>
          <button className={style.Space2Button}>
            Check availability{" "}
            <MdKeyboardArrowRight className={style.SpaceArrow} />{" "}
          </button>
        </div>
      </div>
      <div className={style.Space3}>
        <div className={style.Space3Background}>
          <button className={style.SpaceButton}>
            <MdKeyboardArrowRight className={style.SpaceArrow} />
          </button>
        </div>
        <span className={style.SpaceTitle}>Custom Office</span>
      </div>
    </div>
  );
};

export default SpaceCards;
