import React from "react";
import style from "./judges.module.scss";
import photo from "../../../assets/img/judges/Natalia-Lungu-600x600.jpg";

const Judges = () => {
    return (
        <section className={style.judgesWrapper}>
            <div className={style.headerWrapper}>
                <h2>International Judges</h2>
            </div>
            <div className={style.galleryWrapper}>
                <div className={style.imgWrapper}>
                    <img src={photo} alt ="JudgePhoto" />
                </div>
                <div className={style.imgWrapper}>
                    <img src={photo} alt ="JudgePhoto" />
                </div>
                <div className={style.imgWrapper}>
                    <img src={photo} alt ="JudgePhoto" />
                </div>
                <div className={style.imgWrapper}>
                    <img src={photo} alt ="JudgePhoto" />
                </div>
                <div className={style.imgWrapper}>
                    <img src={photo} alt ="JudgePhoto" />
                </div>
                <div className={style.imgWrapper}>
                    <img src={photo} alt ="JudgePhoto" />
                </div>
                <div className={style.imgWrapper}>
                    <img src={photo} alt ="JudgePhoto" />
                </div>
                <div className={style.imgWrapper}>
                    <img src={photo} alt ="JudgePhoto" />
                </div>
                
            </div>
        </section>
    )
};

export default Judges;