import React,  { useState } from "react";
import style from "./form.module.scss";
import ModalWindow from "../../common/modalWindow/modalWindow";

const Form = () => {

    const [showModal, setShowModal] = useState(false);

    const phonePattern = "\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$";
    const submitHandler = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        sendRequest(data);
        event.target.reset();
        setShowModal(true);
    };
    async function sendRequest(data){
        let object = {};
        data.forEach((value, key) => {
            object[key] = value;
        });
        const jsonData = JSON.stringify(object);
        console.log("DATA", jsonData);
        try {
            const response = await fetch('https://pmu-competition.online/api/forms', {
              method: 'POST',
              body: jsonData
            });
            const result = await response.json();
            console.log('Успех:', result);
          } catch (error) {
            console.error('Ошибка:', error);
          }
    }
    const closeHandler = () => {
        setShowModal(false);
    }
    return (
        <section className={style.wrapper}>
            <div className={style.header}>
                <h2>Registrati Qui</h2>
            </div>
            <div className={style.formWrapper}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="firstname">Nome: <span>*</span> </label>
                        <input type="text" id="firstname" name="name"

                        placeholder="Inserisci il tuo nome" 
                        required pattern={"[a-zA-Z]+"} ></input>
                    <label htmlFor="lastname">Cognome: <span>*</span> </label>
                        <input type="text" id="lastname" name="surname"
                        placeholder="Inserisci il tuo cognone"

                        required pattern={"[a-zA-Z]+"}></input>
                    <label htmlFor="email">Email: <span>*</span> </label>
                        <input type="email" id="email" name="email"

                        placeholder="Inserisci il tuo Email" required></input>
                    <label htmlFor="tel">Telefono: (opzionale) </label>
                        <input type="tel" id="tel" placeholder="Inserisci il tuo telefono"
                        name="phone"

                        pattern={phonePattern}></input>
                    <label htmlFor="country">Paese: (opzionale)</label>
                        <input type="text" id="country" placeholder="Inserisci il tuo paese"
                        name="country"

                        pattern={"[a-zA-Z]+"}></input>
                    <input type="submit" value="INVIA"></input>
                </form>
            </div>
            <ModalWindow show = {showModal} closeHandler = {closeHandler}/>
        </section>
    )
};

export default Form;