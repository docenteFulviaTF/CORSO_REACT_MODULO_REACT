// ESERCIZIO — useState con oggetti/array
// Costruisci un piccolo carrello: un array di articoli con nome e
// prezzo, con la possibilità di aggiungerne uno nuovo.

import {useState} from 'react';

function UseStateOggettiEsercizio() {
  // TODO 1: crea uno stato "carrello", array di oggetti
  // { nome, prezzo }, inizialmente vuoto
  // Soluzione
  const [carrello, setCarrello] = useState([]);

  // TODO 2: crea una funzione che aggiunge un articolo fisso al
  // carrello (es. { nome: "Libro", prezzo: 15 }), usando lo spread
  // operator per creare un nuovo array
  // Soluzione
  const aggiungiArticolo = () => {
    const nuovoArticolo = {nome: 'Libro', prezzo: 15};
    setCarrello([...carrello, nuovoArticolo]);
  };

  // TODO 3 (facoltativo): calcola il totale del carrello sommando
  // i prezzi con .reduce()
  // Soluzione
  const totale = carrello.reduce((acc, articolo) => acc + articolo.prezzo, 0);

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: carrello</h2>

      {/* Soluzione: collegato l'evento onClick alla funzione */}
      <button className="bottone" onClick={aggiungiArticolo}>
        Aggiungi un libro
      </button>

      {/* TODO 4: mostra qui la lista degli articoli nel carrello,
          con .map() e una key stabile */}
      {/* Soluzione */}
      <ul className="lista">
        {carrello.map((articolo, index) => (
          <li key={index}>
            {articolo.nome} - €{articolo.prezzo}
          </li>
        ))}
      </ul>

      {/* Soluzione (collegata al TODO 3): visualizzazione del totale */}
      <div className="totale" style={{marginTop: '1rem', fontWeight: 'bold'}}>
        Totale: €{totale}
      </div>
    </div>
  );
}

export default UseStateOggettiEsercizio;
