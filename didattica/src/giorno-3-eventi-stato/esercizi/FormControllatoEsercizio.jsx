// ESERCIZIO — form controllato
// Costruisci un form di login con username e password, che mostra un
// errore se uno dei due campi è vuoto al momento dell'invio.

import { useState } from "react";
import "./comuni.css";

function FormControllatoEsercizio() {
  // SOLUZIONE TODO 1: crea gli stati "username", "password" ed "errore"
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errore, setErrore] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // SOLUZIONE TODO 2: se username o password sono vuoti, imposta un
    // messaggio in "errore" e interrompi la funzione con return
    if (username.trim() === "" || password.trim() === "") {
      setErrore("Username e password sono obbligatori");
      return;
    }
    // SOLUZIONE TODO 3: altrimenti, azzera "errore" e stampa in console
    // { username, password }
    setErrore("");
    console.log({ username, password });
  }

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: login</h2>
      <form onSubmit={handleSubmit}>
        {/* SOLUZIONE TODO 4: due input controllati per username e password */}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="bottone-riga">
          <button className="bottone" type="submit">
            Accedi
          </button>
        </div>
      </form>
      {/* SOLUZIONE TODO 5: mostra qui l'eventuale messaggio di errore */}
      {errore && <p className="errore">{errore}</p>}
    </div>
  );
}

export default FormControllatoEsercizio;
