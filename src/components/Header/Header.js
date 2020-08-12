import React from "react";
import style from "./header.module.scss";

const Header = () => {
    return (
        <header className={style.headerWrapper}>
            <h1>Maratona online <b>"POWDER BROWS"</b> - Lavoro Guarito</h1>
        </header>
    )
};

export default Header;