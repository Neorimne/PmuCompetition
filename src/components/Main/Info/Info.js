import React from "react";
import style from "./info.module.scss";
import Lashes from "../../common/Lashes";


const Info = () => {
    return (
        <section className={style.infoWrapper}>
            <div className={style.imgWrapper}>
                <Lashes />
            </div>
            <div className={style.textWrapper}>
                International Pmu and Lashes online Competition . 
                Avremo, in giuria artisti internazionali di primissimo livello. 
                Premi in palio da noi offerti per i primi classificati categorie pmu , ciglia e laminazione. Sara’ 
                solo il primo step che portera’ ad un 
                live a Maggio 2021 nella bellissima Palma di Maiorca con le migliori artiste mondiali.
            </div>
        </section>
    )
};

export default Info;