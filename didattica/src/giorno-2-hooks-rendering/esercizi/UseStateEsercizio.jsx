// ESERCIZIO — useState
// Costruisci un pulsante "Mi piace" che alterna tra due stati.

import {useState} from 'react';

function UseStateEsercizio() {
  // TODO 1: crea uno stato booleano "piace", inizialmente false
  // Soluzione
  const [piace, setPiace] = useState(false);

  // TODO 2: crea una funzione che inverte il valore di "piace"
  // (suggerimento: setPiace(!piace))
  // Soluzione
  // const gestisciToggle = () => {
  //   setPiace(!piace);
  // };

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: Mi piace</h2>

      {/* TODO 3: il testo del bottone deve cambiare tra
          "Mi piace" e "Ti piace" a seconda dello stato */}
      {/* Soluzione */}
      {/* <button className="bottone" onClick={gestisciToggle}>
        //oppure
        <button className="bottone" onClick={() => setPiace(!piace)}></button>
        {piace ? 'Ti piace' : 'Mi piace'} 
      </button>*/}
    </div>
  );
}

export default UseStateEsercizio;
