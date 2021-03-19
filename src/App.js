import React from 'react';
import { useForm } from "react-hook-form";
import './App.css';
import Button from "./compontent/Button";

function App() {
    const [countAardbei, setCountAardbei] = React.useState(0);
    const [countBanaan, setCountBanaan] = React.useState(0);
    const [countAppel, setCountAppel] = React.useState(0);
    const [countKiwi, setCountKiwi] = React.useState(0);
    const { handleSubmit, register, errors } = useForm();


   function handleCountUpAardbei() {
        setCountAardbei(countAardbei + 1)
   }
   function handleCountDownAardbei(){
        setCountAardbei(countAardbei - 1)
   }

    function handleCountUpBanaan() {
        setCountBanaan(countBanaan + 1)
    }
    function handleCountDownBanaan(){
        setCountBanaan(countBanaan - 1)
    }
    function handleCountUpAppel() {
        setCountAppel(countAppel + 1)
    }
    function handleCountDownAppel(){
        setCountAppel(countAppel - 1)
    }
    function handleCountUpKiwi() {
        setCountKiwi(countKiwi + 1)
    }
    function handleCountDownKiwi(){
        setCountKiwi(countKiwi - 1)
    }

    function resetAll() {
        setCountAardbei(0);
        setCountKiwi(0);
        setCountBanaan(0);
        setCountAppel(0);
    }

    function onFormSubmit(data) {
        console.log(data);
    }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
    <section >
        <label
            // name="aardbei"
            className="fruitLabel"
            htmlFor="aardbei-button"
        >Aardbeien
            <Button
                text="-"
                id="aardbei-button"
                onClick={handleCountDownAardbei}
                />
            {countAardbei}
            <Button
                text="+"
                id="aardbei-button"
                onClick={handleCountUpAardbei}
            />
        </label>
        <label
            // name="banaan"
            className="fruitLabel"
            htmlFor="banaan-button"
        >
            Bananen
            <Button
                text="-"
                name="banaan-button"
                onClick={handleCountDownBanaan}
            />

            {countBanaan}
            <Button
                text="+"
                name="banaan-button"
                onClick={handleCountUpBanaan}
            />
        </label>
        <label
            className="fruitLabel"
            // name="appel"
            htmlFor="appel-button"
        >Appels
            <Button
                text="-"
                id="appel-button"
                onClick={handleCountDownAppel}
            />
            {countAppel}
            <Button
                text="+"
                id="appel-button"
                onClick={handleCountUpAppel}
            />
            </label>
        <label
            className="fruitLabel"
            // name="kiwi"
            htmlFor=""
        >Kiwi's
            <button
                type="button"
                className="count-button"
                onClick={handleCountDownKiwi}
            >
                -
            </button>
            {countKiwi}
            <Button
                text="+"
                id="kiwi-button"
                onClick={handleCountUpKiwi}
            />

        </label>

        <button onClick={resetAll}>Reset</button>

    </section>

        <form onSubmit={handleSubmit(onFormSubmit)}>
            <label htmlFor="firstName">
                Voornaam:
            <input
                type="text"
                id="firstName"
                name="firstname"
                ref={register}
            />
            </label>
            <p>
                Bezorgfrequentie
            </p>
            <label htmlFor="week">
                <input type="radio"
                       name="frequency"
                       id="week"
                       ref={register}
                       value="week"
                />
                Iedere week
            </label>
            <label htmlFor="two-week">
                <input type="radio"
                       name="frequency"
                       id="two-week"
                       ref={register}
                       value="two-week"
                />
                Om de week
            </label>
            <label htmlFor="month">
                <input type="radio"
                       name="frequency"
                       id="month"
                       ref={register}
                       value="month"
                />
                Iedere maand
            </label>
            <label htmlFor="anders">
                <input type="radio"
                       name="frequency"
                       id="anders"
                       ref={register}
                       value="anders"
                />
                Anders
            </label>
            <p>
                Opmerking
            </p>
            <label>
                <textarea
                    // type="text"
                    placeholder="Wat vond je van het recept?"
                    name="message"
                    rows="4"
                    cols="60"
                    ref={register}>
                </textarea>
            </label>
            <label htmlFor="checkbox">
                <input type="checkbox"
                       name="checkbox"
                       ref={register}/>
                Ik ga akkoord met de voorwaarden
            </label>
            <button type="submit">Verzend</button>

        </form>
    </>
  );
}

export default App;
