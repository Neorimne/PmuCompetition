import React from "react";
import logo from "../../assets/img/IntrigoLogo.jpg";
import style from "./header.module.scss";

const Header = () => {
    return (
        <header className={style.headerWrapper}>
            <div className={style.imgWrapper}>
                <img src={logo} alt="Logo"/>
            </div>
            <h1>Pmu and Lashes Online Competition</h1>
        </header>
    )
};

export default Header;