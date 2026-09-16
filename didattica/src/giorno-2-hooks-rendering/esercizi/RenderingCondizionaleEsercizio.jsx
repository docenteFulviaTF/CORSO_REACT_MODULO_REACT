// ESERCIZIO — rendering condizionale
// Mostra un messaggio diverso a seconda del numero di notifiche.

import {useState} from 'react';
import './comuni.css';

function RenderingCondizionaleEsercizio() {
  const [notifiche, setNotifiche] = useState(0);

  // TODO 1: se notifiche è 0, mostra "Nessuna notifica"
  // TODO 2: se notifiche è 1, mostra "Hai una notifica"
  // TODO 3: se notifiche è maggiore di 1, mostra "Hai {notifiche} notifiche"
  // (suggerimento: puoi usare più return condizionali, come nel file Variante)

  //SOLUZIONE
  // let messaggio;
  // if (notifiche === 0) {
  //   messaggio = 'Nessuna notifica';
  // } else if (notifiche === 1) {
  //   messaggio = 'Hai una notifica';
  // } else {
  //   messaggio = `Hai ${notifiche} notifiche`;
  // }

  //SOLUZIONE
  // let messaggio;
  // if (notifiche === 0) {
  //   messaggio = 'Nessuna notifica';
  // } else if (notifiche === 1) {
  //   messaggio = 'Hai una notifica';
  // } else {
  //   messaggio = `Hai ${notifiche} notifiche`;
  // }

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: notifiche</h2>
      {/* TODO 4: metti qui il messaggio condizionale */}
      {/* //SOLUZIONE
      <p>{messaggio}</p> */}
      <div className="bottone-riga">
        <button className="bottone" onClick={() => setNotifiche(notifiche + 1)}>
          Aggiungi notifica
        </button>
        <button className="bottone bottone--secondario" onClick={() => setNotifiche(0)}>
          Azzera
        </button>
      </div>
    </div>
  );
}

export default RenderingCondizionaleEsercizio;
