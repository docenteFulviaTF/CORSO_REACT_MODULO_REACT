import { useState, useEffect, useRef } from 'react';
import ListaPreferiti2 from './listaPreferiti2';

function GestionePreferiti() {
  // --- STATE ---
  const [preferiti, setPreferiti] = useState([
    { id: 1, titolo: 'Esempio iniziale', visto: false }
  ]);
  const [nuovoTitolo, setNuovoTitolo] = useState('');

  // --- REF ---
  const inputRef = useRef(null);           // per il focus sull'input
  const contatoreClickRef = useRef(0);      // contatore "silenzioso", non causa re-render

  // --- EFFECT ---
  useEffect(() => {
    console.log('Numero preferiti:', preferiti.length);
  }, [preferiti]);

  useEffect(() => {
    console.log('Sto digitando:', nuovoTitolo);
  }, [nuovoTitolo]);

  // --- FUNZIONI ---
  function handleAggiungi(event) {
    event.preventDefault();

    if (nuovoTitolo.trim() === '') {
      return;
    }

    const nuovoElemento = {
      id: Date.now(),
      titolo: nuovoTitolo,
      visto: false
    };

    setPreferiti([...preferiti, nuovoElemento]);
    setNuovoTitolo('');

    inputRef.current.focus();

    contatoreClickRef.current += 1;
    console.log('Click su Aggiungi (sessione corrente):', contatoreClickRef.current);
  }

  function handleToggleVisto(id) {
    setPreferiti(
      preferiti.map((elemento) =>
        elemento.id === id
          ? { ...elemento, visto: !elemento.visto }
          : elemento
      )
    );
  }

  function handleRimuovi(id) {
    setPreferiti(preferiti.filter((elemento) => elemento.id !== id));
  }

  const totaleVisti = preferiti.filter((e) => e.visto).length;

  return (
    <div>
      <h1>Lista Preferiti</h1>

      <form onSubmit={handleAggiungi}>
        <input
          ref={inputRef}
          type="text"
          value={nuovoTitolo}
          onChange={(e) => setNuovoTitolo(e.target.value)}
          placeholder="Nuovo elemento"
        />
        <button type="submit">Aggiungi</button>
      </form>

      <p>
        Hai segnato come visti {totaleVisti} elementi su {preferiti.length}
      </p>

      <ListaPreferiti2
        preferiti={preferiti}
        onToggleVisto={handleToggleVisto}
        onRimuovi={handleRimuovi}
      />
    </div>
  );
}

export default GestionePreferiti;
