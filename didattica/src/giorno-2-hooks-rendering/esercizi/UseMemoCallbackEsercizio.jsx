// ESERCIZIO — useMemo & useCallback
// Filtra una lista di numeri mostrando solo quelli pari, ricalcolando
// il filtro solo quando la lista o la soglia cambiano.

import {useState, useMemo, useCallback} from 'react';

function UseMemoCallbackEsercizio() {
  const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // TODO 1: crea uno stato "soloPari", booleano, inizialmente false
  // Soluzione
  const [soloPari, setSoloPari] = useState(false);

  // TODO 2: usa useMemo per calcolare "numeriFiltrati": se soloPari
  // è true, restituisce solo i numeri pari, altrimenti tutti i numeri
  // (suggerimento: numero % 2 === 0). Ricorda l'array di dipendenze
  // Soluzione (memorizza il RISULTATO del filtro)
  const numeriFiltrati = useMemo(() => {
    if (soloPari) {
      return numeri.filter(numero => numero % 2 === 0);
    }
    return numeri;
  }, [soloPari, numeri]);

  // Soluzione (memorizza la FUNZIONE di gestione dell'evento)
  const handleToggle = useCallback(() => {
    setSoloPari(prev => !prev);
  }, []);

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: filtro numeri pari</h2>

      {/* Soluzione: usa la funzione memorizzata da useCallback */}
      <button className="bottone" onClick={handleToggle}>
        {soloPari ? 'Mostra tutti' : 'Mostra solo pari'}
      </button>

      {/* TODO 3: mostra numeriFiltrati con .map() */}
      {/* Soluzione */}
      <ul className="lista" style={{marginTop: '1rem'}}>
        {numeriFiltrati.map(numero => (
          <li key={numero}>{numero}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemoCallbackEsercizio;
