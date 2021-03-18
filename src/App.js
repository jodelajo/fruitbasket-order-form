import React from 'react';
import './App.css';

function App() {
    const [countAardbei, setCountAardbei] = React.useState(0);
    const [countBanaan, setCountBanaan] = React.useState(0);
    const [countAppel, setCountAppel] = React.useState(0);
    const [countKiwi, setCountKiwi] = React.useState(0);


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

    function resetButton(e){
    e.target.reset();
    }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
    <form >
        <label
            name="aardbei"
        className="fruitLabel"
            htmlFor="aardbei-button"
        >Aardbeien
        <button
            id="aardbei-button"
            type="button"
            onClick={handleCountDownAardbei}
        >
            -
        </button>
            {countAardbei}
            <button
                type="button" onClick={handleCountUpAardbei} > + </button>
        </label>
        <label
            name="banaan"
            className="fruitLabel"
        >
            Bananen
            <button
                type="button"
                onClick={handleCountDownBanaan}
            >
                -
            </button>
            {countBanaan}
            <button
                type="button" onClick={handleCountUpBanaan} > + </button>
        </label>
        <label
            className="fruitLabel"
            name="appel"
        >Appels
            <button
                type="button"
                onClick={handleCountDownAppel}
            >
                -
            </button>
            {countAppel}
            <button
                type="button" onClick={handleCountUpAppel} > + </button></label>
        <label
            className="fruitLabel"
            name="kiwi"
        >Kiwi's
            <button
                type="button"
                onClick={handleCountDownKiwi}
            >
                -
            </button>
            {countKiwi}
            <button
                type="button" onClick={handleCountUpKiwi} > + </button></label>

        <button onClick={resetButton}>Reset</button>

    </form>
    </>
  );
}

export default App;
