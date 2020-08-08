import React from "react";
import style from "./footer.module.scss";

const Footer = () => {
    return (
        <footer className={style.footerWrapper}>
            <div className={style.copyright}>
                Copyright 2020 Intrigo Espana
            </div>
            <div className={style.author}>
                Designed by Denis Lungu 
            </div>
        </footer>
    )
}

export default Footer;