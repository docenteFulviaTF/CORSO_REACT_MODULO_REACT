// ESERCIZIO — useReducer
// Costruisci un semaforo con tre stati ("rosso", "giallo", "verde")
// che passano in sequenza ad ogni click, gestiti da un reducer.

import { useReducer } from "react";
import "./comuni.css";

function reducer(state, action) {
  // SOLUZIONE TODO 1: gestisci l'azione "avanti":
  // da "rosso" si passa a "verde", da "verde" a "giallo",
  // da "giallo" si torna a "rosso"
  switch (action.type) {
    case "avanti":
      if (state === "rosso") return "verde";
      if (state === "verde") return "giallo";
      if (state === "giallo") return "rosso";
      return state;
    default:
      return state;
  }
}

function UseReducerEsercizio() {
  const [colore, dispatch] = useReducer(reducer, "rosso");

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: semaforo</h2>
      {/* SOLUZIONE TODO 2: mostra il colore corrente, magari con un badge */}
      <p className="badge" style={{ backgroundColor: colore }}>
        {colore.toUpperCase()}
      </p>
      <div className="bottone-riga">
        <button className="bottone" onClick={() => dispatch({ type: "avanti" })}>
          Avanti
        </button>
      </div>
    </div>
  );
}

export default UseReducerEsercizio;
