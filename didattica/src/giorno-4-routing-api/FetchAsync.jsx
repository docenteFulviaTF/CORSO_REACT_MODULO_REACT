// Stessa logica del file FetchBase.jsx, riscritta con async/await.
// La funzione passata a useEffect non può essere async direttamente:
// si definisce una funzione asincrona interna.

import { useState, useEffect } from "react";
import "./comuni.css";

function FetchAsync() {
  const [utenti, setUtenti] = useState([]);
  const [caricamento, setCaricamento] = useState(true);
  const [errore, setErrore] = useState(null);

  useEffect(() => {
    async function caricaDati() {
      try {
        setCaricamento(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Errore del server");
        const dati = await response.json();
        setUtenti(dati);
      } catch (err) {
        setErrore(err.message);
      } finally {
        setCaricamento(false);
      }
    }

    caricaDati();
  }, []);

  if (caricamento) return <p className="sottotitolo">Caricamento in corso...</p>;
  if (errore) return <span className="badge badge--errore">Errore: {errore}</span>;

  return (
    <div className="box">
      <h2 className="titolo">Utenti (fetch con async/await)</h2>
      <ul className="lista">
        {utenti.map((utente) => (
          <li key={utente.id}>{utente.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchAsync;
