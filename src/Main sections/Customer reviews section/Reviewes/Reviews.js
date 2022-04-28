import React from "react";
import style from "./Reviews.module.css";

const Reviews = () => {
  return (
    <div className={style.Reviews}>
      <div className={style.Review1}>
        <div className={style.Review1Text}>
          Our team has been working at frispes for almost 2 months because our
          office still closed. During working at frispes, we feel a new
          experience, we can feel working with a beautiful, modern, and
          comfortable space. And cozy cafe with high-speed internet in there.
          Thank you for frispes and team.
        </div>
        <div className={style.Reviewer1}>
            <div className={style.ReviewerImage}>

            </div>
            <div className={style.ReviewerName}>
                <span className={style.ProfileName}>
                    Pedro Ibanez
                </span>
                <span className={style.ProfileWork}>
                    UI Designer at Google
                </span>
            </div>
        </div>
      </div>
      <div className={style.Review2}>
        <div className={style.Review1Text}>
          The high-speed internet at frispes was so amazing. I can get best
          experience when running video call with my clients. Frispes has
          spacious and safe parking area, that’s what i need because i used to
          work as freelancer for a long time.
        </div>
        <div className={style.Reviewer1}>
            <div className={style.Reviewer2Image}>

            </div>
            <div className={style.ReviewerName}>
                <span className={style.ProfileName}>
                    Raymond Thual
                </span>
                <span className={style.ProfileWork}>
                    Professional Freelancer
                </span>
            </div>
        </div>
      </div>
      <div className={style.Review3}>
        <div className={style.Review3Text}>Just three words : Frispes is Awesome!</div>
        <div className={style.Reviewer3}>
            <div className={style.Reviewer3Image}>

            </div>
            <div className={style.ReviewerName}>
                <span className={style.ProfileName}>
                    Yuli Berlian
                </span>
                <span className={style.ProfileWork}>
                    IOS Dev at Tokopedia
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
