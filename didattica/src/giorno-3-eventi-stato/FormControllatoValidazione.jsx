// Form con validazione base: il bottone di invio resta disabilitato
// finché i campi obbligatori non sono compilati, e viene mostrato un
// messaggio di errore se si tenta comunque l'invio.

import {useState} from 'react';
import './comuni.css';

function FormControllatoValidazione() {
  const [email, setEmail] = useState('');
  const [errore, setErrore] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.includes('@')) {
      setErrore('Inserisci un indirizzo email valido');
      return;
    }

    setErrore('');
    console.log('Email valida:', email);
  }

  return (
    <div className="box">
      <h2 className="titolo">Form con validazione</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        <div className="bottone-riga">
          <button className="bottone" type="submit" disabled={email.trim() === ''}>
            Invia
          </button>
        </div>
      </form>
      {errore && <span className="badge badge--errore">{errore}</span>}
    </div>
  );
}

export default FormControllatoValidazione;
