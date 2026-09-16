import { useState, useEffect, useRef } from 'react';

function ListaPreferiti() {
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

  // --- FUNZIONI (tutte locali, nessuna prop da passare) ---
  function handleAggiungi(event) {
    event.preventDefault(); // il bottone è dentro un <form>, blocca il reload

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

  // --- RENDER: tutto qui dentro, niente componenti figli ---
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

      {preferiti.length === 0 ? (
        <p>Nessun preferito ancora</p>
      ) : (
        <ul>
          {preferiti.map((elemento) => (
            <li key={elemento.id}>
              <span
                style={
                  elemento.visto
                    ? { fontStyle: 'italic', textDecoration: 'line-through' }
                    : {}
                }
              >
                {elemento.titolo}
              </span>
              <input
                type="checkbox"
                checked={elemento.visto}
                onChange={() => handleToggleVisto(elemento.id)}
              />
              <button onClick={() => handleRimuovi(elemento.id)}>Rimuovi</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaPreferiti;
