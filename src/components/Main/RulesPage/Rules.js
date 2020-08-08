import React from "react";
import style from "./rules.module.scss";
import Lashes from "../../common/Lashes";
import Shading from "../../common/Shading";
import { Link } from "react-router-dom";

const Rules = () => {
    return (
        <div className={style.rulesWrapper}>
            <div className={style.imgWrapper}>
                <Lashes />
            </div>
            <div className={style.dateInfo}>
                Después de registrarse, envíenos su trabajo antes del 20 de agosto a info@intrigoespana.com<br/>

                After sign up, send us your work by August 20th at info@intrigoespana.com<br/>

                Dopo esserti iscritta, inviaci il tuo lavoro entro il 20 Agosto a info@intrigoespana.com
            </div>
            <div className={style.headerWrapper}>
                <h2>Pmu- Sombreado Pixel-Shading Pixel-Sfumatura Effetto Pixel</h2>
            </div>
            <div className={style.rulesBlock}>
                <span>Prova su pelle sintetica, da inviare file alta risoluzione per permettere di valutare bene l lavori.</span><br /><br />
                <span>Criteri di valutazione: </span>
                <ul>
                    <li>Simmetria delle forme (esempio: lunghezza,altezza,spessore,stesso design per lato)</li>
                    <li>simmetria di riempimento e degradazione di colore</li>
                    <li>qualita’ delle trasparenza</li>
                    <li>qualita’ dettagli pixel</li>
                    <li>design</li>
                </ul>
                <span>INVIARE IL LAVORO FINITO (dopo l’iscrizione)</span><br />
                <span>info@intrigoespana.com</span>
            </div>
            <div className={style.headerWrapper}>
                <h2>Ejemplo-Example-Esempio</h2>
            </div>
            <div className={style.imgWrapper}>
                <Shading />
            </div>
            <div className={style.headerWrapper}>
                <h2>Lashes Extension One to One - Pelo a Pelo</h2>
            </div>
            <div className={style.rulesBlock}>
                <ol>
                    <li>La foto può essere scattata con il telefono e la fotocamera, sebbene sia importante che sia a fuoco.</li>
                    <li>Abbiamo bisogno di 2 foto  (occhi chiusi e occhi aperti prima) e 2 foto  (occhi chiusi e occhi aperti del dopo</li>
                    <li>Foto ritoccate generano espulsione dalla gara</li>
                    <li>Accettiamo massimo 6 foto</li>
                </ol>
                <span>Criteri di valutazione: </span>
                <ul>
                    <li>Immagine complessiva lavoro (esteticamente)</li>
                    <li>Effetto</li>
                    <li>Simmetria delle ciglia dell’occhio sinistro e destro</li>
                    <li>lunghezza</li>
                    <li>Curvatura</li>
                    <li>Spessore</li>
                    <li>Colore</li>
                    <li>Distanza dalla palpebra</li>
                    <li>Aderenza tra ciglia naturali ed extension</li>
                    <li>Direzione delle ciglia applicate</li>
                    <li>Angolo interno</li>
                    <li>Angolo Esterno</li>
                    <li>Passaggio da una lunghezza all’altra</li>
                    <li>Quantita’ ciglia applicate</li>
                </ul>
                <div className={style.btnWrapper}>
                    <Link to="/">BACK</Link>  
                </div>
            </div>
        </div>
    )
}

export default Rules;