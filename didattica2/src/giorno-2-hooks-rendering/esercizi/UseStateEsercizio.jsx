// ESERCIZIO — useState
// Costruisci un pulsante "Mi piace" che alterna tra due stati.

import { useState } from "react";
import "./comuni.css";

function UseStateEsercizio() {
  // TODO 1: crea uno stato booleano "piace", inizialmente false

  // TODO 2: crea una funzione che inverte il valore di "piace"
  // (suggerimento: setPiace(!piace))

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: Mi piace</h2>

      {/* TODO 3: il testo del bottone deve cambiare tra
          "Mi piace" e "Ti piace" a seconda dello stato */}
      <button className="bottone">Mi piace</button>
    </div>
  );
}

export default UseStateEsercizio;
