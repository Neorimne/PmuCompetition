import React from "react";
import style from "./judges.module.scss";
import photo1 from "../../../assets/img/judges/NataliaLungu.JPG";
import photo2 from "../../../assets/img/judges/3f07f9d7-2f8f-4c20-ab81-d3cb6fa3f961.JPG";
import photo3 from "../../../assets/img/judges/4abf8601-d221-46d5-b667-2cba4cc6d511.JPG";
import photo4 from "../../../assets/img/judges/00073c6b-c985-4419-b1a9-f23503487008.JPG";
import photo5 from "../../../assets/img/judges/73f26b38-79a4-4a4a-8479-90832f984147.JPG";
import photo6 from "../../../assets/img/judges/8570d27f-9b2f-48bb-ae4b-598469cce447.JPG";
import photo7 from "../../../assets/img/judges/23490019-581a-40c6-aa84-6be1929e4952.JPG";
import photo8 from "../../../assets/img/judges/IMG_6833.JPG";

const Judges = () => {
    return (
        <section className={style.judgesWrapper}>
            <div className={style.headerWrapper}>
                <h2>International Judges</h2>
            </div>
            <div className={style.galleryWrapper}>
                <div className={style.imgWrapper}>
                    <img src={photo1} alt ="JudgePhoto" />
                </div>
                <div className={style.imgWrapper}>
                    <img src={photo2} alt ="JudgePhoto" />
                </div>
                <div className={style.imgWrapper}>
                    <img src={photo3} alt ="JudgePhoto" />
                </div>
                <div className={style.imgWrapper}>
                    <img src={photo4} alt ="JudgePhoto" />
                </div>
                <div className={style.imgWrapper}>
                    <img src={photo5} alt ="JudgePhoto" />
                </div>
                <div className={style.imgWrapper}>
                    <img src={photo6} alt ="JudgePhoto" />
                </div>
                <div className={style.imgWrapper}>
                    <img src={photo7} alt ="JudgePhoto" />
                </div>
                <div className={style.imgWrapper}>
                    <img src={photo8} alt ="JudgePhoto" />
                </div>
                
            </div>
        </section>
    )
};

export default Judges;