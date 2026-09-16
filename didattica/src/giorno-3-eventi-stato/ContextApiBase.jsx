// Context API — condivide un valore con qualsiasi componente
// dell'albero senza passarlo esplicitamente tramite props
// (evita il prop drilling).

import { createContext, useContext, useState } from "react";
import "./comuni.css";

// 1. Creare il context
const TemaContext = createContext("chiaro");

// 3. Consumare il context con useContext
function Intestazione() {
  const { tema, setTema } = useContext(TemaContext);

  return (
    <div className={tema === "scuro" ? "box" : "box box--tratteggiato"}>
      <p className="sottotitolo">Tema attuale: {tema}</p>
      <button
        className="bottone"
        onClick={() => setTema(tema === "chiaro" ? "scuro" : "chiaro")}
      >
        Cambia tema
      </button>
    </div>
  );
}

function Contenuto() {
  const { tema } = useContext(TemaContext);
  return <p className="sottotitolo">Contenuto a tema "{tema}" (nessuna prop passata qui)</p>;
}

// 2. Fornire il context con il Provider
function ContextApiBase() {
  const [tema, setTema] = useState("chiaro");

  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      <Intestazione />
      <Contenuto />
    </TemaContext.Provider>
  );
}

export default ContextApiBase;
