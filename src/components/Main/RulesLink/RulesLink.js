import React from "react";
import style from "./rulesLink.module.scss";
import { Link } from "react-router-dom";


const RulesLink = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.linkWrapper}>
              <Link to="/rules">{props.text}</Link>
            </div>
        </div>
    )
}

export default RulesLink;