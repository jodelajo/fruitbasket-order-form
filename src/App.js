import React from 'react';
import {useForm} from "react-hook-form";
import './App.css';
import logo from "./assets/screenshot-logo.png";
// import Button from "./compontent/Button";

function App() {
    const [countAardbei, setCountAardbei] = React.useState(0);
    const [countBanaan, setCountBanaan] = React.useState(0);
    const [countAppel, setCountAppel] = React.useState(0);
    const [countKiwi, setCountKiwi] = React.useState(0);
    const {handleSubmit, register, errors, watch} = useForm();

    const anders = watch("frequency")
    const order = [
        {Aardbeien: countAardbei},
        {Bananen: countBanaan},
        {Appels: countAppel},
        {Kiwi: countKiwi},
    ]


    function handleCountUpAardbei() {
        setCountAardbei(countAardbei + 1)

    }

    function handleCountDownAardbei() {
        setCountAardbei(countAardbei - 1)
    }

    function handleCountUpBanaan() {
        setCountBanaan(countBanaan + 1)
    }

    function handleCountDownBanaan() {
        setCountBanaan(countBanaan - 1)
    }

    function handleCountUpAppel() {
        setCountAppel(countAppel + 1)
    }

    function handleCountDownAppel() {
        setCountAppel(countAppel - 1)
    }

    function handleCountUpKiwi() {
        setCountKiwi(countKiwi + 1)
    }

    function handleCountDownKiwi() {
        setCountKiwi(countKiwi - 1)
    }

    function resetAll() {
        setCountAardbei(0);
        setCountKiwi(0);
        setCountBanaan(0);
        setCountAppel(0);
    }


    function onFormSubmit(data) {
        console.log(data, order);
    }

    return (
        <>
            <div id="complete-form">
                <section>
                    <img src={logo} alt="logo"/>
                    <h1>Fruitmand bezorgservice</h1>
                    <label
                        className="fruitLabel"
                    ><p className="fruit">🍓 Aardbeien</p>
                        <button
                            className="count-button"
                            type="button"
                            onClick={() => countAardbei > 0 && handleCountDownAardbei()}
                        > -
                        </button>
                        <p className="counter"> {countAardbei} </p>
                        <button
                            className="count-button"
                            type="button"
                            onClick={handleCountUpAardbei}
                        > +
                        </button>
                    </label>
                    <label
                        className="fruitLabel"
                    >
                        <p className="fruit">🍌 Bananen</p>
                        <button
                            type="button"
                            className="count-button"
                            onClick={() => countBanaan > 0 && handleCountDownBanaan()}
                        > -
                        </button>
                        <p className="counter">{countBanaan}</p>
                        <button
                            className="count-button"
                            type="button"
                            onClick={handleCountUpBanaan}
                        > +
                        </button>
                    </label>
                    <label
                        className="fruitLabel"
                    ><p className="fruit">🍏 Appels</p>
                        <button
                            className="count-button"
                            type="button"
                            onClick={() => countAppel > 0 && handleCountDownAppel()}
                        > -
                        </button>
                        <p className="counter">{countAppel}</p>
                        <button
                            type="button"
                            className="count-button"
                            onClick={handleCountUpAppel}> +
                        </button>
                    </label>
                    <label
                        className="fruitLabel"
                    ><p className="fruit">🥝 Kiwi's</p>
                        <button
                            className="count-button"
                            type="button"
                            onClick={() => countKiwi > 0 && handleCountDownKiwi()}
                        > -
                        </button>
                        <p className="counter"> {countKiwi}</p>
                        <button
                            className="count-button"
                            type="button"
                            onClick={handleCountUpKiwi}
                        > +
                        </button>
                    </label>

                    <button className="button-reset" onClick={resetAll}>Reset</button>

                </section>
                <section>
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        <label htmlFor="firstName" className="form-label">
                            Voornaam:

                        <input
                            className="name-field"
                            type="text"
                            id="firstName"
                            name="firstname"
                            ref={register({required: true})}
                        />
                        </label>
                        <label htmlFor="lastName" className="form-label">
                            Achternaam:

                        <input
                            className="name-field"
                            type="text"
                            id="lastName"
                            name="lastname"
                            ref={register({required: true})}
                        />
                        </label>
                        <label htmlFor="age" className="form-label">
                            Leeftijd:

                        <input
                            className="name-field"
                            type="number"
                            id="age"
                            name="age"
                            placeholder="Minimaal 18 jaar"
                            ref={register(
                                {
                                    required: true,
                                    validate: (value) => value >= 18,
                                    message: 'Minimum leeftijd is 18 jaar',
                                }
                            )}
                        />
                        </label>
                        {errors.age && <p className="errors">Minimum leeftijd is 18 jaar</p>}
                        <label htmlFor="zipcode" className="form-label">
                            Postcode:

                        <input
                            className="name-field"
                            type="text"
                            id="zipcode"
                            name="zipcode"
                            placeholder="1234AB"
                            ref={register({
                                required: true,
                                pattern: /[0-9]{4}[A-Z]{2}/
                            })}
                        />
                        </label>
                        {errors.zipcode && <p className="errors">Geen geldig postcode</p>}
                        <label htmlFor="house-number" className="form-label">
                            Huisnummer zonder toevoeging:

                        <input
                            className="name-field-number"
                            type="number"
                            id="house-number"
                            name="house-number"
                            ref={register({required: true})}
                        />
                        </label>
                        <p className="new-block">
                            Bezorgfrequentie
                        </p>
                        <section>
                            <label htmlFor="week" className="frequency-label">
                                <input type="radio"
                                       name="frequency"
                                       id="week"
                                       ref={register({required: true})}
                                       value="week"
                                />
                                Iedere week
                            </label>
                            <label htmlFor="two-week" className="frequency-label">
                                <input type="radio"
                                       name="frequency"
                                       id="two-week"
                                       ref={register({required: true})}
                                       value="two-week"
                                />
                                Om de week
                            </label>
                            <label htmlFor="month"
                                   className="frequency-label">
                                <input type="radio"
                                       name="frequency"
                                       id="month"
                                       ref={register({required: true})}
                                       value="month"
                                />
                                Iedere maand
                            </label>
                            <label htmlFor="anders"
                                   className="frequency-label">
                                <input type="radio"
                                       name="frequency"
                                       id="anders"
                                       ref={register({required: true})}
                                       value="anders"
                                />
                                Anders
                            </label>
                            {anders === "anders" && (
                                <textarea
                                    name="otherFrequency"
                                    ref={register}
                                    placeholder="Andere frequentie, nl:"
                                />
                            )}
                        </section>
                        <p>
                            Opmerking
                        </p>
                        <label>
                <textarea
                    className="text-area"
                    placeholder="Wij horen graag van u!"
                    name="message"
                    rows="4"
                    cols="60"
                    ref={register}>
                </textarea>
                        </label>
                        <label htmlFor="checkbox"
                               className="frequency-label"
                        >
                            <input type="checkbox"
                                   name="checkbox"
                                   ref={register}/>
                            Ik ga akkoord met de voorwaarden
                        </label>
                        <button className="button-submit" type="submit">Verzend</button>

                    </form>
                </section>
            </div>
        </>
    );
}

export default App;
