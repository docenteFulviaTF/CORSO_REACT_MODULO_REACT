// Confronto diretto: stesso dato (utente loggato) passato con le
// props attraverso due livelli intermedi (prop drilling) rispetto
// allo stesso dato letto via Context, senza passare da nessuno dei
// due componenti intermedi.

import {createContext, useContext} from 'react';
import './comuni.css';

const UtenteContext = createContext(null);

// --- Versione con prop drilling ---
function PaginaConProps({utente}) {
  return <SezioneConProps utente={utente} />;
}

function SezioneConProps({utente}) {
  // Questo componente non usa "utente", lo riceve solo per passarlo oltre
  return <ProfiloConProps utente={utente} />;
}

function ProfiloConProps({utente}) {
  return <p className="sottotitolo">(props) Utente: {utente}</p>;
}

// --- Versione con Context ---
function PaginaConContext() {
  return <SezioneConContext />;
}

function SezioneConContext() {
  // Questo componente non tocca affatto il dato "utente"
  return <ProfiloConContext />;
}

function ProfiloConContext() {
  const utente = useContext(UtenteContext);
  return <p className="sottotitolo">(context) Utente: {utente}</p>;
}

function ContextApiVsProps() {
  return (
    <div className="box">
      <h2 className="titolo">Prop drilling vs Context</h2>
      <PaginaConProps utente="Giulia" />
      <UtenteContext.Provider value="Giulia">
        <PaginaConContext />
      </UtenteContext.Provider>
    </div>
  );
}

export default ContextApiVsProps;
