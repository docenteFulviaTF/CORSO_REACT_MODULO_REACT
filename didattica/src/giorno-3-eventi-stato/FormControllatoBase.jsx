// Input controllati — il valore del campo è sempre sincronizzato con
// lo state, aggiornato tramite onChange.
// event.preventDefault() impedisce il ricaricamento della pagina.

import {useState} from 'react';
import './comuni.css';

function FormControllatoBase() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [inviato, setInviato] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log({nome, email});
    setInviato(true);
    setNome('');
    setEmail('');
  }

  return (
    <div className="box">
      <h2 className="titolo">Iscrizione</h2>
      <form onSubmit={handleSubmit}>
        <div className="bottone-riga" style={{flexDirection: 'column', alignItems: 'stretch'}}>
          <input
            className="input"
            type="text"
            value={nome}
            onChange={e => {
              setNome(e.target.value);
              !nome && setInviato(false);
            }}
            placeholder="Nome"
          />
          <input
            className="input"
            type="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
              !email && setInviato(false);
            }}
            placeholder="Email"
          />
          <button className="bottone" type="submit">
            Invia
          </button>
        </div>
      </form>
      {inviato && <span className="badge badge--successo">Inviato!</span>}
    </div>
  );
}

export default FormControllatoBase;
