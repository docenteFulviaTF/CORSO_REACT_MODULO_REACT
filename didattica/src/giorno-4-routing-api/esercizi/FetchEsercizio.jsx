// ESERCIZIO — fetch
// Carica la lista dei post da jsonplaceholder e mostra titolo e id,
// gestendo caricamento ed errore. Usa la sintassi che preferisci
// (.then o async/await).

import {useState, useEffect} from 'react';

function FetchEsercizio() {
  // TODO 1: crea gli stati "post", "caricamento" (default true) ed "errore"

  useEffect(() => {
    // TODO 2: fai una fetch a "https://jsonplaceholder.typicode.com/posts"
    // e salva il risultato in "post", gestendo il caso di errore
    // (suggerimento: limita i risultati mostrati con .slice(0, 5)
    // per non riempire la pagina)
  }, []);

  // TODO 3: gestisci i tre casi (caricamento, errore, dati pronti)

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: lista post</h2>
      {/* TODO 4: mostra qui la lista */}
    </div>
  );
}

export default FetchEsercizio;
