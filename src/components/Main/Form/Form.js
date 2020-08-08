import React from "react";
import style from "./form.module.scss";

const Form = () => {
    return (
        <section className={style.wrapper}>
            <hr></hr>
            <div className={style.header}>
                <h2>Registrati Qui</h2>
            </div>
            <div className={style.formWrapper}>
                <form>
                    <label htmlFor="firstname">Nome: <span>*</span> </label>
                        <input type="text" id="firstname" placeholder="Nome" required></input>
                    <label htmlFor="lastname">Cognome: <span>*</span> </label>
                        <input type="text" id="lastname" placeholder="Cognome" required></input>
                    <label htmlFor="email">Email: <span>*</span> </label>
                        <input type="email" id="email" placeholder="Email" required></input>
                    <label htmlFor="tel">Telefono: </label>
                        <input type="tel" id="tel" placeholder="Telefono"></input>
                    <div>
                        Dopo l'invio,riceverai una mail di conferma
                    </div>
                    <input type="submit" value="INVIA"></input>
                </form>
            </div>
        </section>
    )
};

export default Form;