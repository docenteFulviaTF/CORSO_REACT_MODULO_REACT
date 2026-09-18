// Uso della funzione di servizio inviaForm dentro un componente:
// il componente gestisce solo lo stato del form e la UI, la logica
// della chiamata resta in ApiPost.js.

import {useState} from 'react';
import inviaForm from './ApiPost.js';
import './comuni.css';

function EsempioUsoPost() {
  const [titolo, setTitolo] = useState('');
  const [inviando, setInviando] = useState(false);
  const [risultato, setRisultato] = useState(null);
  const [errore, setErrore] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setInviando(true);
    setErrore(null); //reset dell'errore

    try {
      const dati = await inviaForm({title: titolo, body: '', userId: 2});
      setRisultato(dati);
    } catch (err) {
      setErrore(err.message);
    } finally {
      setInviando(false);
    }
  }

  return (
    <div className="box">
      <h2 className="titolo">Invio POST</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          value={titolo}
          onChange={e => setTitolo(e.target.value)}
          placeholder="Titolo del post"
        />
        <div className="bottone-riga">
          <button className="bottone" type="submit" disabled={inviando}>
            {inviando ? 'Invio in corso...' : 'Invia'}
          </button>
        </div>
      </form>
      {risultato && <span className="badge badge--successo">Creato con id {risultato.id}</span>}
      {errore && <span className="badge badge--errore">{errore}</span>}
    </div>
  );
}

export default EsempioUsoPost;
