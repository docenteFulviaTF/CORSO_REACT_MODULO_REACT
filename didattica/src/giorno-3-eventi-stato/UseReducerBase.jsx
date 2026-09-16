// useReducer — preferibile a useState per logiche di stato complesse,
// dove il prossimo stato dipende dal precedente in modi diversi a
// seconda dell'azione eseguita.

import { useReducer } from "react";
import "./comuni.css";

function reducer(state, action) {
  switch (action.type) {
    case "incrementa":
      return { contatore: state.contatore + 1 };
    case "decrementa":
      return { contatore: state.contatore - 1 };
    case "azzera":
      return { contatore: 0 };
    default:
      throw new Error("Azione non riconosciuta: " + action.type);
  }
}

function UseReducerBase() {
  const [state, dispatch] = useReducer(reducer, { contatore: 0 });

  return (
    <div className="box">
      <h2 className="titolo">Contatore: {state.contatore}</h2>
      <div className="bottone-riga">
        <button className="bottone" onClick={() => dispatch({ type: "incrementa" })}>+</button>
        <button className="bottone" onClick={() => dispatch({ type: "decrementa" })}>-</button>
        <button className="bottone bottone--secondario" onClick={() => dispatch({ type: "azzera" })}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default UseReducerBase;
