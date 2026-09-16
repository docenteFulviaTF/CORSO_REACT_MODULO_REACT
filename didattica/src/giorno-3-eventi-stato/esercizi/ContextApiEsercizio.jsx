// ESERCIZIO — Context API
// Crea un LinguaContext che condivide la lingua corrente ("it" o "en")
// tra due componenti annidati, senza passarla come prop.

import {createContext, useContext, useState} from 'react';

// SOLUZIONE TODO 1: crea LinguaContext con createContext("it")
const LinguaContext = createContext('it');

function Saluto() {
  // SOLUZIONE TODO 2: leggi la lingua dal context con useContext
  const {lingua} = useContext(LinguaContext);
  // SOLUZIONE TODO 3: mostra "Ciao!" se lingua è "it", "Hello!" se è "en"
  return <p className="sottotitolo">{lingua === 'it' ? 'Ciao!' : 'Hello!'}</p>;
}

function Selettore() {
  // SOLUZIONE TODO 4: leggi lingua e setLingua dal context
  const {lingua, setLingua} = useContext(LinguaContext);

  return (
    <div className="bottone-riga">
      {/* SOLUZIONE TODO 5: due bottoni per impostare "it" oppure "en" */}
      <button className={`bottone${lingua === 'it' ? ' bottone--attivo' : ''}`} onClick={() => setLingua('it')}>
        Italiano
      </button>
      <button className={`bottone${lingua === 'en' ? ' bottone--attivo' : ''}`} onClick={() => setLingua('en')}>
        English
      </button>
    </div>
  );
}

function ContextApiEsercizio() {
  const [lingua, setLingua] = useState('it');

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: lingua condivisa</h2>
      {/* SOLUZIONE TODO 6: avvolgi Saluto e Selettore nel Provider,
          passando { lingua, setLingua } come value */}
      <LinguaContext.Provider value={{lingua, setLingua}}>
        <Saluto />
        <Selettore />
      </LinguaContext.Provider>
    </div>
  );
}

export default ContextApiEsercizio;
