// Lifting state up con tre componenti fratelli: temperatura condivisa
// tra un cursore, un termometro testuale e un'etichetta di stato.
// Lo stato vive un solo livello sopra, in LiftingStateTreLivelli.

import {useState} from 'react';
import './comuni.css';

function Cursore({valore, onChange}) {
  return <input type="range" min="0" max="40" value={valore} onChange={e => onChange(Number(e.target.value))} />;
}

function Termometro({valore, children}) {
  return (
    <>
      <p className="sottotitolo">{valore}°C</p>
      {children}
    </>
  );
}

function EtichettaStato({valore}) {
  const stato =
    valore < 15 ? 'Freddo'
    : valore < 28 ? 'Mite'
    : 'Caldo';
  return <span className="badge badge--successo">{stato}</span>;
}

function LiftingStateTreLivelli() {
  const [temperatura, setTemperatura] = useState(20);

  return (
    <div className="box">
      <h2 className="titolo">Temperatura condivisa tra tre componenti</h2>
      <Cursore valore={temperatura} onChange={setTemperatura} />
      <Termometro valore={temperatura}>
        <h1>titolo</h1>
        {/*aggiunto solo per provare i children */}
      </Termometro>
      <EtichettaStato valore={temperatura} />
    </div>
  );
}

export default LiftingStateTreLivelli;
