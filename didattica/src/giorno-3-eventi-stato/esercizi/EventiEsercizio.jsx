// ESERCIZIO — eventi
// Costruisci una lista di preferiti: click su un elemento per
// segnarlo come "preferito", passando l'id all'handler.

import {useState} from 'react';

const brani = [
  {id: 1, titolo: 'Brano A'},
  {id: 2, titolo: 'Brano B'},
  {id: 3, titolo: 'Brano C'}
];

function EventiEsercizio() {
  // SOLUZIONE TODO 1: crea uno stato "preferiti", array di id, inizialmente vuoto
  const [preferiti, setPreferiti] = useState([]);

  function handlePreferito(id) {
    // SOLUZIONE TODO 2: se l'id è già in "preferiti", rimuovilo; altrimenti aggiungilo
    if (preferiti.includes(id)) {
      setPreferiti(preferiti.filter(prefId => prefId !== id));
    } else {
      setPreferiti([...preferiti, id]);
    }
  }

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: preferiti</h2>
      <ul className="lista">
        {brani.map(brano => {
          // SOLUZIONE TODO 3: il testo del bottone e la classe (badge) devono
          // cambiare a seconda che il brano sia già nei preferiti
          const isPreferito = preferiti.includes(brano.id);
          return (
            <li key={brano.id}>
              {brano.titolo}
              <button
                className={`bottone bottone--secondario ${isPreferito ? ' bottone--attivo' : ''}`}
                onClick={() => handlePreferito(brano.id)}>
                {isPreferito ? 'Non preferito' : 'Preferito'}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EventiEsercizio;
