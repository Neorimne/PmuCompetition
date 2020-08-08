import React from "react";
import style from "./rulesLink.module.scss";
import { Link } from "react-router-dom";


const RulesLink = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.linkWrapper}>
              <Link to="/rules">Regolamento</Link>
            </div>
        </div>
    )
}

export default RulesLink;