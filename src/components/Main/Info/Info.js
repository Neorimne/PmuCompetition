import React from "react";
import Fade from 'react-reveal/Fade';
import style from "./info.module.scss";
import Lashes from "../../common/Lashes";
import RulesLink from "../RulesLink/RulesLink.js";


const Info = () => {
    return (
        <section className={style.infoWrapper}>

        <Fade left >
            <div className={style.imgWrapper} key={0}>
                <Lashes />
            </div>
        </Fade>
        <Fade right delay={1000}>
            <div className={style.textWrapper}>
                <div className={style.itText}>
                    International Pmu  online Competition.
                    Un Format Comodo che ti consente di dimostrare le tue competenze e vincere! 
                    Avremo, in giuria artisti internazionali di primissimo livello. 
                    Premi in palio offerti per i primi classificati nella categoria pmu "powder brows" - lavoro guarito,
                    dallo sponsor generale "INTRIGO" e anche dalla nostra egregia giuria regali speciali.
                    Vedi maggiori informazioni: <RulesLink text="Regolamento" />
                </div>
                <hr></hr>
                 <div className={style.engText}>
                    International Pmu online Competition.
                    A Convenient Format that allows you to demonstrate 
                    your skills and win! We will have international artists of the
                    highest level on the jury. Prizes offered for the first classified in the pmu 
                    category "powder brows" - work healed, by the general sponsor "INTRIGO" and also by our dear jury special gifts.
                    See more info: <RulesLink text="Rules" />
                 </div>
            </div>
        </Fade>    
        </section>
    )
};


export default Info;