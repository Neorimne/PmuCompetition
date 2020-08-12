import React from "react";
import style from "./rules.module.scss";
import Lashes from "../../common/Lashes";
import Shading from "../../common/Shading";
import { Link } from "react-router-dom";
import Emoji from "../../common/Emoji";

const Rules = () => {
    return (
        <div className={style.rulesWrapper}>
            <div className={style.imgWrapper}>
                <Lashes />
            </div>
            <div className={style.dateInfo}>

                After sign up, send us your work by September 27th at artfacebynatalialungu@gmail.com<br/>

                Dopo esserti iscritta, inviaci il tuo lavoro entro il 27 Settembre a artfacebynatalialungu@gmail.com
            </div>
            <div className={style.headerWrapper}>
                <h2>RULES-REGOLE</h2>
            </div>
            <div className={style.rulesBlock}>
                <ul>
                    <li><Emoji label="Red triangle" symbol="🔺"/> 
                    I lavori / le foto devono essere inviate entro e non oltre il 27 settembre 2020 entro le 24.00</li>
                    <li><Emoji label="Heavy Exclamation Mark Symbol" symbol="❗️"/><Emoji label="Heavy Exclamation Mark Symbol" symbol="❗️"/>
                    Le foto inviate dopo la data specificata non saranno valutate<Emoji label="Heavy Exclamation Mark Symbol" symbol="❗️"/><Emoji label="Heavy Exclamation Mark Symbol" symbol="❗️"/></li>
                    <li><Emoji label="Red triangle" symbol="🔺"/>
                    Il partecipante invia la foto (il formato e il numero delle foto saranno descritti di seguito)</li>
                    <li><Emoji label="Red triangle" symbol="🔺"/>
                    Le foto devono essere di buona qualità, non sfocate, con una buona illuminazione e senza ombre sul viso.</li>
                    <li><Emoji label="Red triangle" symbol="🔺"/>Il viso è girato in primo piano (come per un passaporto)‼️ 
                    le foto modificate su Photoshop o in un altro programma non verranno valutate‼️</li>
                    <li><Emoji label="Red triangle" symbol="🔺"/>la modella deve essere scelta dal Master stesso</li>
                    <li><Emoji label="Red triangle" symbol="🔺"/>
                    i lavori per il concorso dovrebbero apparire naturali,
                    esteticamente gradevoli, da devolvere tutti i vantaggi della modella.</li>
                    <li><Emoji label="Red triangle" symbol="🔺"/>I Partecipanti arrivati sul podio</li>
                    <li><Emoji label="Trophy" symbol="🏆"/>1,2,3 saranno premiati con premi dallo sponsor ufficiale "INTRIGO"</li>
                    <li><Emoji label="Party Popper" symbol="🎉"/>  E inoltre un giudice internazionale potrebbe scegliere e assegnare un premio speciale all’lavoro che gli è gradito di più
                    ‼️CHE FOTO INVIARE‼️</li>
                    <li><Emoji label="Red triangle" symbol="🔺"/>
                    LA MODELLA IN UNA POSIZIONE VERTICALE, DA SEDUTA O IN PIEDI (NON Sdraiata!)</li>
                    <li><Emoji label="Red triangle" symbol="🔺"/>UN COLLAGE DI FOTO
                        <ol type="a">
                            <li>PRIMA IL TRATTAMENTO </li>
                            <li>IMMEDIATAMENTE DOPO IL TRATTAMENTO!</li>
                            <li>TUTTO IL VISO IN PRIMO PIANO COME DA PASSAPORTO</li>
                        </ol>
                    </li>
                    <li><Emoji label="Red triangle" symbol="🔺"/>COLLAGE DI FOTO DEL LAVORO GUARITO!
                        <ol type="a">
                            <li>VISO INTERO IN PRIMO PIANO  COME DA PASSAPORTO</li>
                            <li>FOTO IN PRIMO PIANO! SOLO L’ AREA DEL LAVORO EFFETTUATO IN ANFAS (entrambe le sopracciglia)</li>
                        </ol>
                    </li>
                    <li><Emoji label="Red triangle" symbol="🔺"/>FOTO COLLAGE DEL LAVORO GUARITO (coda del sopracciglio)
                        <ol type="a">
                            <li>FOTO IN PRIMO PIANO! SOLO L’ AREA DEL LAVORO EFFETTUATO IN ANFAS (entrambe le sopracciglia)</li>
                            <li>FOTO IN PRIMO PIANO DELLA CODA DEL SOPRACCIGLIO DESTRO</li>
                            <li>FOTO IN PRIMO PIANO DELLA CODA DEL SOPRACCIGLIO SINISTRO</li>
                        </ol>
                    </li>
                </ul>
                <b>E QUINDI:</b>
                <ul>
                    <li><Emoji label="Heavy Exclamation Mark Symbol" symbol="❗️"/>Il partecipante deve inviare 3 collage<Emoji label="Heavy Exclamation Mark Symbol" symbol="❗️"/></li>
                    <li>prima e immediatamente dopo il procedimento (viso intero)</li>
                    <li>Lavoro guarito
                        <ol type="a">
                            <li>primo piano di tutto il viso come da passaporto</li>
                            <li>ravvicinare solo l'area di lavoro</li>
                        </ol>
                    </li>
                    <li>Lavoro guarito
                        <ol type="a">
                            <li>primo piano solo coda del sopracciglio destro </li>
                            <li>primo piano solo coda del sopracciglio sinistro</li>
                        </ol>
                    </li>
                </ul>
                <div>
                    <Emoji label="Heavy Exclamation Mark Symbol" symbol="❗️"/>
                    <Emoji label="Heavy Exclamation Mark Symbol" symbol="❗️"/>
                    VIETATO L'UTILIZZO DI QUALSIASI EDITORE  FOTOGRAFICO O FILTRO SULLA FOTO‼️
                    <Emoji label="Heavy Exclamation Mark Symbol" symbol="❗️"/>
                    <Emoji label="Heavy Exclamation Mark Symbol" symbol="❗️"/>
                </div>              
                <div>
                    Tutto il materiale (foto) verrà dovrà essere inviato al email:
                    artfacebynatalialungu@gmail.com
                    con la nota / oggetto "MARATONA BROWS"
                </div>
                
                alla foto deve essere allegata una seguente descrizione:
                <ul>
                    <li>Il tuo cognome, nome</li>
                    <li>Il link ai tuoi social network: fb e Instagram</li>
                    <li>Paese / Città / Indirizzo (in caso di vittoria, un premio verrà inviato all'indirizzo specificato)</li>
                </ul>
                <Emoji label="Trophy" symbol="🏆"/> GIOCA E VINCI <Emoji label="Trophy" symbol="🏆"/>
                <hr />
                <ul>
                    <li><Emoji label="Red triangle" symbol="🔺"/> 
                    Works / photos must be submitted no later than 27 September 2020 by 24.00</li>
                    <li><Emoji label="Heavy Exclamation Mark Symbol" symbol="❗️"/><Emoji label="Heavy Exclamation Mark Symbol" symbol="❗️"/>
                    Photos sent after the specified date will not be evaluated<Emoji label="Heavy Exclamation Mark Symbol" symbol="❗️"/><Emoji label="Heavy Exclamation Mark Symbol" symbol="❗️"/></li>
                    <li><Emoji label="Red triangle" symbol="🔺"/>
                    The participant sends the photo (the size and number of the photos will be described below)</li>
                    <li><Emoji label="Red triangle" symbol="🔺"/>
                    Photos should be of good quality, not blurred, with good lighting and without shadows on the face.</li>
                    <li><Emoji label="Red triangle" symbol="🔺"/>The face is shot in the foreground (as for a passport)‼️ 
                    photos edited in Photoshop or another program will not be evaluated‼️</li>
                    <li><Emoji label="Red triangle" symbol="🔺"/>the model must be chosen by the Master himself</li>
                    <li><Emoji label="Red triangle" symbol="🔺"/>
                    works for the competition should look natural,
                    aesthetically pleasing, to devolve all the advantages of the model.</li>
                    <li><Emoji label="Red triangle" symbol="🔺"/>The participants arrived on the podium</li>
                    <li><Emoji label="Trophy" symbol="🏆"/>1,2,3 will be awarded with prizes from the official sponsor " INTRIGO"</li>
                    <li><Emoji label="Party Popper" symbol="🎉"/>And also an international judge could choose and award a special award to the work that he liked the most
                    ‼️WHICH PHOTO TO SEND‼️</li>
                    <li><Emoji label="Red triangle" symbol="🔺"/>
                    The model in a vertical position, sitting or standing (not lying down!)</li>
                    <li><Emoji label="Red triangle" symbol="🔺"/>A PHOTO COLLAGE
                        <ol type="a">
                            <li>BEFORE TREATMENT</li>
                            <li>IMMEDIATELY AFTER TREATMENT!</li>
                            <li>ALL FACE FEATURED AS PER PASSPORT</li>
                        </ol>
                    </li>
                    <li><Emoji label="Red triangle" symbol="🔺"/>PHOTO COLLAGE OF HEALED WORK!
                        <ol type="a">
                            <li>FULL FACE FEATURED AS PER PASSPORT</li>
                            <li>CLOSE-UP PHOTOS! Only the area of work performed in ANFAS (both eyebrows)</li>
                        </ol>
                    </li>
                    <li><Emoji label="Red triangle" symbol="🔺"/>Photo COLLAGE of the healed work (eyebrow tail)
                        <ol type="a">
                            <li>CLOSE-UP PHOTOS! Only the area of work performed in ANFAS (both eyebrows)</li>
                            <li>CLOSE-UP PHOTO OF THE TAIL OF THE RIGHT EYEBROW</li>
                            <li>PHOTO IN THE FOREGROUND OF THE TAIL OF THE LEFT EYEBROW</li>
                        </ol>
                    </li>
                </ul>
                <b>AND SO:</b>
                <ul>
                    <li><Emoji label="Heavy Exclamation Mark Symbol" symbol="❗️"/>The participant must submit 3 collages<Emoji label="Heavy Exclamation Mark Symbol" symbol="❗️"/></li>
                    <li>before and immediately after the procedure (whole face)</li>
                    <li>Work healed
                        <ol type="a">
                            <li>close-up of the whole face as per passport</li>
                            <li>approximate only the working area</li>
                        </ol>
                    </li>
                    <li>Work healed
                        <ol type="a">
                            <li>close-up only right eyebrow tail</li>
                            <li>closeup only left eyebrow tail</li>
                        </ol>
                    </li>
                </ul>
                <div>
                    <Emoji label="Heavy Exclamation Mark Symbol" symbol="❗️"/>
                    <Emoji label="Heavy Exclamation Mark Symbol" symbol="❗️"/>
                    Forbidden to use any photo editor or filter on the photo‼️
                    <Emoji label="Heavy Exclamation Mark Symbol" symbol="❗️"/>
                    <Emoji label="Heavy Exclamation Mark Symbol" symbol="❗️"/>
                </div>
                <div>
                All material (photo) will have to be sent to email:
                    artfacebynatalialungu@gmail.com
                    with the Note / subject "marathon BROWS"
                </div>
                the following description should be attached to the photo:
                <ul>
                    <li>Your last name, first name</li>
                    <li>The link to your social networks: FB and Instagram</li>
                    <li>Country / City / address (in case of victory, a prize will be sent to the specified address)</li>
                </ul> 
                <Emoji label="Trophy" symbol="🏆"/> PLAY AND WIN <Emoji label="Trophy" symbol="🏆"/>
            </div>
            <div className={style.headerWrapper}>
                <h2>Criteri di valutazione - Evaluation Criteria</h2>
            </div>
            <div className={style.rulesBlock}>
                <span>Lavoro guarito sulla modella</span><br /><br />
                <ul>
                    <li>simmetria delle forme (esempio: lunghezza,altezza,spessore,stesso design per lato)</li>
                    <li>simmetria di riempimento e degradazione di colore</li>
                    <li>qualita’ delle trasparenza</li>
                    <li>qualita’ dettagli pixel</li>
                    <li>design</li>
                    <li>corretta selezione della gamma cromatica dei pigmenti</li>
                </ul>
                <span>INVIARE IL LAVORO GUARITO (dopo l’iscrizione)</span><br />
                <span>artfacebynatalialungu@gmail.com</span>
                <hr />
                <span>Healed work on the model</span><br /><br />
                <ul>
                    <li>symmetry of shapes (example: length, height, thickness,same design by side)</li>
                    <li>symmetry of filling and color degradation</li>
                    <li>quality of transparency</li>
                    <li>quality pixel details</li>
                    <li>design</li>
                    <li>correct selection of the color range of pigments</li>
                </ul>
                <span>Send the healed work (after enrollment)</span><br />
                <span>artfacebynatalialungu@gmail.com</span>
            </div>
            <div className={style.headerWrapper}>
                <h2>Example-Esempio</h2>
            </div>
            <div className={style.imgWrapper}>
                <Shading />
            </div>
            <div className={style.rulesBlock}>
                <div className={style.btnWrapper}>
                    <Link to="/">BACK</Link>  
                </div>
            </div>
        </div>
    )
}

export default Rules;