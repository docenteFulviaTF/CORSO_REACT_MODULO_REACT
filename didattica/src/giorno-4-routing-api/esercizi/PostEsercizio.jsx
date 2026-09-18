// ESERCIZIO — invio dati (POST)
// Scrivi la funzione di servizio "creaCommento" e usala in un form
// che invia un commento con nome e testo.

// soluzione
async function creaCommento(dati) {
  const risposta = await fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(dati)
  });

  if (!risposta.ok) throw new Error('Errore API ' + risposta.status);
  return risposta.json();
}

import {useState} from 'react';

function PostEsercizio() {
  const [nome, setNome] = useState('');
  const [testo, setTesto] = useState('');
  const [inviando, setInviando] = useState(false);
  // soluzione (serve per gestire "un eventuale errore" richiesto dal TODO 2)
  const [errore, setErrore] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    // soluzione
    setInviando(true);
    setErrore(null);
    try {
      await creaCommento({name: nome, body: testo, email: 'test@test.com'});
    } catch (err) {
      setErrore(err.message);
    } finally {
      setInviando(false);
    }
  }

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: nuovo commento</h2>
      <form onSubmit={handleSubmit}>
        <input className="input" value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" />
        <input className="input" value={testo} onChange={e => setTesto(e.target.value)} placeholder="Commento" />
        {errore && <p className="errore">Si è verificato un errore: {errore}</p>}
        <div className="bottone-riga">
          <button className="bottone" type="submit" disabled={inviando}>
            {inviando ? 'Invio...' : 'Invia commento'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostEsercizio;
