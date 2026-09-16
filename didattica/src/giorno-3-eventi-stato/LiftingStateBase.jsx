// Lifting state up — quando due componenti fratelli devono
// condividere lo stesso dato, lo state va spostato nel loro antenato
// comune più vicino e passato verso il basso tramite props.

import {useState} from 'react';
import './comuni.css';

//Se non passo la funzione che gestisce l'onchange il campo risulta essere il sola lettura
function Input({valore, onChange}) {
  return (
    <input className="input" value={valore} onChange={e => onChange(e.target.value)} placeholder="Scrivi qualcosa" />
  );
}

function Anteprima({testo}) {
  return <p className="sottotitolo">Anteprima: {testo || '(vuoto)'}</p>;
}

function LiftingStateBase() {
  const [testo, setTesto] = useState('');

  return (
    <div className="box">
      <h2 className="titolo">Input e anteprima sincronizzati</h2>
      <Input valore={testo} onChange={setTesto} />
      <Anteprima testo={testo} />
    </div>
  );
}

export default LiftingStateBase;
