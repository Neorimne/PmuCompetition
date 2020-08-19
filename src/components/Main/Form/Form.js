import React from "react";
import style from "./form.module.scss";

const Form = () => {
    
    
    const submitHandler = (e) => {
        e.preventDefault();
        alert("its working")
    };
 
    return (
        <section className={style.wrapper}>
            <div className={style.header}>
                <h2>Registrati Qui</h2>
            </div>
            <div className={style.formWrapper}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="firstname">Nome: <span>*</span> </label>
                        <input type="text" id="firstname" placeholder="Nome" required pattern={"[a-zA-Z]+"}></input>
                    <label htmlFor="lastname">Cognome: <span>*</span> </label>
                        <input type="text" id="lastname" placeholder="Cognome" required pattern={"[a-zA-Z]+"}></input>
                    <label htmlFor="email">Email: <span>*</span> </label>
                        <input type="email" id="email" placeholder="Email" required></input>
                    <label htmlFor="tel">Telefono: </label>
                        <input type="tel" id="tel" placeholder="Telefono"></input>
                    <input type="submit" value="INVIA"></input>
                </form>
            </div>
        </section>
    )
};

export default Form;