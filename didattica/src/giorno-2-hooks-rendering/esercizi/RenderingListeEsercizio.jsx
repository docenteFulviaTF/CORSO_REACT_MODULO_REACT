// ESERCIZIO — rendering di liste
// Costruisci una lista della spesa con aggiunta e rimozione di
// elementi, usando un id stabile come key.

import {useState} from 'react';

let prossimoId = 1;

function RenderingListeEsercizio() {
  // TODO 1: crea uno stato "articoli", array di oggetti { id, nome },
  // inizialmente vuoto
  // Soluzione
  const [articoli, setArticoli] = useState([]);
  const [testo, setTesto] = useState('');

  function handleAggiungi() {
    if (testo.trim() === '') return;
    // TODO 2: aggiungi un nuovo oggetto { id: prossimoId, nome: testo }
    // all'array "articoli", poi incrementa prossimoId e svuota "testo"
    // Soluzione
    const nuovoArticolo = {id: prossimoId, nome: testo};
    setArticoli([...articoli, nuovoArticolo]);
    prossimoId++;
    setTesto('');
  }

  function handleRimuovi(id) {
    // TODO 3: rimuovi dall'array l'articolo con questo id
    // Soluzione
    setArticoli(articoli.filter(articolo => articolo.id !== id));
  }

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: lista della spesa</h2>
      <div className="bottone-riga">
        <input className="input" value={testo} onChange={e => setTesto(e.target.value)} placeholder="Nuovo articolo" />
        <button className="bottone" onClick={handleAggiungi}>
          Aggiungi
        </button>
      </div>

      {/* TODO 4: mostra qui "articoli" con .map(), key = articolo.id,
          e un bottone "Rimuovi" per ciascuno che chiama handleRimuovi */}
      {/* Soluzione */}
      <ul className="lista" style={{marginTop: '1rem'}}>
        {articoli.map(articolo => (
          <li key={articolo.id} style={{display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px'}}>
            <span>{articolo.nome}</span>
            <button className="bottone bottone--secondario" onClick={() => handleRimuovi(articolo.id)}>
              Rimuovi
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RenderingListeEsercizio;
