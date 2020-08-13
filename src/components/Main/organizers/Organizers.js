import React from "react";
import style from "./organizers.module.scss";
import logoIntrigo from "../../../assets/img/IntrigoLogo.jpg";
import Fade from 'react-reveal/Fade';


const Organizers = () => {
    return (
        <div className={style.orgWrapper}>
            <div className={style.headerWrapper}>
                <h2>ORGANIZZATO DA</h2>
            </div>
            <Fade left>
                <div className={style.imgWrapper}>
                    <img src={logoIntrigo} alt ="intrigo"  />
                </div>
            </Fade>
            <Fade right>
                <div className={style.artFaceWrapper}>
                    ARTFACE By <br />
                    Natalia Lungu
                </div>
            </Fade>
        </div>
    )
}

export default Organizers;