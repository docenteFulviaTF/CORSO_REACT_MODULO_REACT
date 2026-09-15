// ESERCIZIO — useRef
// Costruisci un campo di testo con un bottone "Seleziona tutto" che
// seleziona il contenuto del campo senza passare da uno stato.

import { useRef } from "react";
import "./comuni.css";

function UseRefEsercizio() {
  // TODO 1: crea una ref "campoRef" inizializzata a null

  function handleSeleziona() {
    // TODO 2: usa campoRef.current per selezionare il testo
    // (suggerimento: i campi di testo hanno un metodo .select())
  }

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: seleziona tutto</h2>
      <div className="bottone-riga">
        {/* TODO 3: collega la ref a questo input */}
        <input className="input" type="text" defaultValue="Testo di prova" />
        <button className="bottone" onClick={handleSeleziona}>
          Seleziona tutto
        </button>
      </div>
    </div>
  );
}

export default UseRefEsercizio;
