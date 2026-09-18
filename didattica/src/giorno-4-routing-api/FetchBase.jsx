// Consumo di API con Fetch, versione con .then/.catch.
// useEffect avvia la chiamata al montaggio, useState conserva i dati.

import { useState, useEffect } from "react";
import "./comuni.css";

function FetchBase() {
  const [utenti, setUtenti] = useState([]);
  const [caricamento, setCaricamento] = useState(true);
  const [errore, setErrore] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) throw new Error("Errore del server");
        return response.json();
      })
      .then((dati) => {
        setUtenti(dati);
        setCaricamento(false);
      })
      .catch((err) => {
        setErrore(err.message);
        setCaricamento(false);
      });
  }, []);

  if (caricamento) return <p className="sottotitolo">Caricamento in corso...</p>;
  if (errore) return <span className="badge badge--errore">Errore: {errore}</span>;

  return (
    <div className="box">
      <h2 className="titolo">Utenti (fetch con .then)</h2>
      <ul className="lista">
        {utenti.map((utente) => (
          <li key={utente.id}>{utente.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchBase;
