import React from "react";
import style from "./Boxes.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const Boxes = () => {
  return (
    <div className={style.Boxes}>
      <div className={style.OnlyBoxes}>
        <div className={style.BoxShadow}>
          <div className={style.TextBox}>
            <div className={style.NoShadowTextBox}>
              <div className={style.Text}>
                How do I know if a space is available?
              </div>
            </div>
          </div>
          <button className={style.BoxButton}>
            <MdKeyboardArrowRight className={style.ButtonArrow} />
          </button>
        </div>
        <div className={style.BoxShadow}>
          <div className={style.TextBox}>
            <div className={style.NoShadowTextBox}>
              <div className={style.Text}>How do i book a space?</div>
            </div>
          </div>
          <button className={style.BoxButton}>
            <MdKeyboardArrowRight className={style.ButtonArrow} />
          </button>
        </div>
        <div className={style.BoxShadow}>
          <div className={style.TextBox}>
            <div className={style.NoShadowTextBox}>
              <div className={style.Text}>How do reviews work?</div>
            </div>
          </div>
          <button className={style.BoxButton}>
            <MdKeyboardArrowRight className={style.ButtonArrow} />
          </button>
        </div>
      </div>
      <div className={style.MoreQuestions}>
        More questions{" "}
        <MdKeyboardArrowRight className={style.MoreQuestionsArrow} />{" "}
      </div>
    </div>
  );
};

export default Boxes;
