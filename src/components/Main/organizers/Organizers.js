import React from "react";
import style from "./organizers.module.scss";
import logoIntrigo from "../../../assets/img/IntrigoLogo.jpg";



const Organizers = () => {
    return (
        <div className={style.orgWrapper}>
            <div className={style.headerWrapper}>
                <h2>ORGANIZZATO DA</h2>
            </div>
            <div className={style.imgWrapper}>
                <img src={logoIntrigo} alt ="intrigo"  />
            </div>
            <div className={style.artFaceWrapper}>
                ARTFACE By <br />
                Natalia Lungu
            </div>
        </div>
    )
}

export default Organizers;