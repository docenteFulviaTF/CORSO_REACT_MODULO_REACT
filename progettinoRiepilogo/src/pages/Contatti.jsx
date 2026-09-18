import {useState} from 'react';
import useTitolo from '../hooks/useTitolo';

export default function Contatti() {
  useTitolo('Contatti - Mini Sito');

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
    <div style={{padding: '20px'}}>
      <h1>Contatti</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <button type="submit">Invia</button>
      </form>
      {inviato && <p>Dati inviati!</p>}
    </div>
  );
}
