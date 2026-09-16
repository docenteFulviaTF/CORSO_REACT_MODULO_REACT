// useReducer con uno stato più complesso di un numero: una lista di
// attività, con azioni "aggiungi", "completa" e "rimuovi". Mostra
// perché il reducer conviene quando le azioni possibili sono più di
// due o tre e ciascuna trasforma lo stato in modo diverso.

import { useReducer, useState } from "react";
import "./comuni.css";

function reducer(state, action) {
  switch (action.type) {
    case "aggiungi":
      return [...state, { id: action.id, testo: action.testo, completata: false }];
    case "completa":
      return state.map((voce) =>
        voce.id === action.id ? { ...voce, completata: !voce.completata } : voce
      );
    case "rimuovi":
      return state.filter((voce) => voce.id !== action.id);
    default:
      throw new Error("Azione non riconosciuta: " + action.type);
  }
}

let prossimoId = 1;

function UseReducerListaAzioni() {
  const [attivita, dispatch] = useReducer(reducer, []);
  const [testo, setTesto] = useState("");

  function handleAggiungi() {
    if (testo.trim() === "") return;
    dispatch({ type: "aggiungi", id: prossimoId, testo });
    prossimoId++;
    setTesto("");
  }

  return (
    <div className="box">
      <h2 className="titolo">Attività (reducer con tre azioni)</h2>
      <div className="bottone-riga">
        <input
          className="input"
          value={testo}
          onChange={(e) => setTesto(e.target.value)}
          placeholder="Nuova attività"
        />
        <button className="bottone" onClick={handleAggiungi}>
          Aggiungi
        </button>
      </div>
      <ul className="lista">
        {attivita.map((voce) => (
          <li key={voce.id} style={{ textDecoration: voce.completata ? "line-through" : "none" }}>
            {voce.testo}
            <div className="bottone-riga" style={{ marginTop: 0 }}>
              <button
                className="bottone bottone--secondario"
                onClick={() => dispatch({ type: "completa", id: voce.id })}
              >
                {voce.completata ? "Riapri" : "Completa"}
              </button>
              <button
                className="bottone bottone--secondario"
                onClick={() => dispatch({ type: "rimuovi", id: voce.id })}
              >
                Rimuovi
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseReducerListaAzioni;
