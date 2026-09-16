// ESERCIZIO — useEffect
// Costruisci un contatore di secondi trascorsi dal montaggio del
// componente, con un pulsante per fermarlo.

import {useState, useEffect} from 'react';

function UseEffectEsercizio() {
  // TODO 1: crea uno stato "secondi", inizialmente 0
  // Soluzione
  const [secondi, setSecondi] = useState(0);

  // TODO 2: crea uno stato booleano "attivo", inizialmente true
  // Soluzione
  const [attivo, setAttivo] = useState(true);

  // TODO 3: dentro useEffect, avvia un setInterval che incrementa
  // "secondi" ogni 1000ms, ma solo se "attivo" è true
  // Ricorda la funzione di cleanup con clearInterval
  // Soluzione
  useEffect(() => {
    let intervallo = null;

    if (attivo) {
      intervallo = setInterval(() => {
        setSecondi(prevSecondi => prevSecondi + 1);
      }, 1000);
    }

    // Cleanup: pulisce l'intervallo al smontaggio o al cambio di "attivo"
    return () => {
      if (intervallo) clearInterval(intervallo);
    };
  }, [attivo]);

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: cronometro</h2>

      {/* TODO 4: mostra qui il valore di "secondi" */}
      {/* Soluzione */}
      <p style={{fontSize: '1.5rem', fontWeight: 'bold'}}>Secondi trascorsi: {secondi}s</p>

      <div className="bottone-riga">
        {/* TODO 5: bottone che mette "attivo" a false per fermare il conteggio */}
        {/* Soluzione */}
        <button className="bottone bottone--secondario" onClick={() => setAttivo(false)}>
          Ferma
        </button>
      </div>
    </div>
  );
}

export default UseEffectEsercizio;
