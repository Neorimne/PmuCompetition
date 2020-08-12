import React from "react";
import style from "./info.module.scss";
import Lashes from "../../common/Lashes";
import RulesLink from "../RulesLink/RulesLink.js";


const Info = () => {
    return (
        <section className={style.infoWrapper}>
            <div className={style.imgWrapper}>
                <Lashes />
            </div>
            <div className={style.textWrapper}>
                International Pmu  online Competition.
                Un Format Comodo che ti consente di dimostrare le tue competenze e vincere! 
                Avremo, in giuria artisti internazionali di primissimo livello. 
                Premi in palio offerti per i primi classificati nella categoria pmu "powder brows" - lavoro guarito,
                dallo sponsor generale "INTRIGO" e anche dalla nostra egregia giuria regali speciali.
                Vedi maggiori informazioni: <RulesLink text="Regolamento" /><hr />
                International Pmu online Competition. 
                A Convenient Format that allows you to demonstrate 
                your skills and win! We will have international artists of the
                 highest level on the jury. Prizes offered for the first classified in the pmu 
                 category "powder brows" - work healed, by the general sponsor "INTRIGO" and also by our dear jury special gifts.
                 See more info: <RulesLink text="Rules" /> 
            </div>
        </section>
    )
};


export default Info;