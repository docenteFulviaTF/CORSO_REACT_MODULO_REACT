// ESERCIZIO — hook personalizzato
// Estendi l'idea di useFetch scrivendo "useContatore", un hook che
// gestisce uno stato numerico con funzioni incrementa/decrementa,
// riutilizzabile in più componenti.

import { useState } from "react";
import "./comuni.css";

// soluzione
function useContatore(valoreIniziale) {
  const [valore, setValore] = useState(valoreIniziale);

  // aggiornamento funzionale (v => v + 1) invece di valore + 1: se in futuro
  // incrementa venisse chiamata più volte di seguito prima che React
  // rifaccia il render, ognuna vede lo stato aggiornato dalla precedente
  function incrementa() {
    setValore(v => v + 1);
  }

  function decrementa() {
    setValore(v => v - 1);
  }

  return {valore, incrementa, decrementa};
}

function PrimoContatore() {
  // soluzione
  const {valore, incrementa, decrementa} = useContatore(0);

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Primo contatore</h2>
      {/* soluzione */}
      <p>{valore}</p>
      <div className="bottone-riga">
        <button className="bottone" onClick={decrementa}>
          -
        </button>
        <button className="bottone" onClick={incrementa}>
          +
        </button>
      </div>
    </div>
  );
}

function SecondoContatore() {
  // soluzione: stesso hook, ma ogni chiamata crea il proprio useState
  // indipendente — questo contatore parte da 10 e non ha nulla a che
  // vedere con lo stato di PrimoContatore
  const {valore, incrementa, decrementa} = useContatore(10);

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Secondo contatore</h2>
      <p>{valore}</p>
      <div className="bottone-riga">
        <button className="bottone" onClick={decrementa}>
          -
        </button>
        <button className="bottone" onClick={incrementa}>
          +
        </button>
      </div>
    </div>
  );
}

function UseFetchEsercizio() {
  return (
    <div>
      <PrimoContatore />
      <SecondoContatore />
    </div>
  );
}

export default UseFetchEsercizio;
