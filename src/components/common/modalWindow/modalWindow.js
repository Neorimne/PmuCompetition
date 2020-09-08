import React from "react";
import style from "./modalWindow.module.scss";

const ModalWindow = (props) => {
    return (
        <div style={props.show ? {display: "block"} : {display: "none"}} >
            <div className={style.jwModal}>
                    <div className={style.jwModalBody}>
                        Grazie per la registrazione <br></br>
                        <button onClick={props.closeHandler} className={style.btn}>CHIUDI</button>
                    </div>
                </div>
                <div className={style.jwModalBackground}></div>
                
        </div>
    )
};

export default ModalWindow;