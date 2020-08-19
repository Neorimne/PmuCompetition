import React from "react";
import style from "./organizers.module.scss";
import logoIntrigo from "../../../assets/img/IntrigoLogo.jpg";
import logoArtFace from "../../../assets/img/ArtFaceLogo.jpg";
import Fade from 'react-reveal/Fade';


const Organizers = () => {
    return (
        <div className={style.orgWrapper}>
            <div className={style.headerWrapper}>
                <h2>ORGANIZZATO DA</h2>
            </div>
            <div className={style.logosWrapper}>
                <Fade left>
                    <div className={style.imgWrapper}>
                            <img src={logoArtFace} alt ="artface"  />
                    </div>
                </Fade>
                <Fade right>
                    <div className={style.imgWrapper}>
                            <img src={logoIntrigo} alt ="intrigo"  />
                    </div>
                </Fade>
            </div>   
        </div>
    )
}

export default Organizers;