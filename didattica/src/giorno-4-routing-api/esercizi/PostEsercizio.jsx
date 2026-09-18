// ESERCIZIO — invio dati (POST)
// Scrivi la funzione di servizio "creaCommento" e usala in un form
// che invia un commento con nome e testo.

// TODO 1: scrivi qui la funzione async "creaCommento(dati)" che fa
// una POST verso "https://jsonplaceholder.typicode.com/comments",
// con headers Content-Type application/json e body JSON.stringify(dati)

import {useState} from 'react';

function PostEsercizio() {
  const [nome, setNome] = useState('');
  const [testo, setTesto] = useState('');
  const [inviando, setInviando] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    // TODO 2: chiama creaCommento con { name: nome, body: testo, email: "test@test.com" }
    // gestendo lo stato "inviando" e un eventuale errore
  }

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: nuovo commento</h2>
      <form onSubmit={handleSubmit}>
        <input className="input" value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" />
        <input className="input" value={testo} onChange={e => setTesto(e.target.value)} placeholder="Commento" />
        <div className="bottone-riga">
          <button className="bottone" type="submit">
            Invia commento
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostEsercizio;
