// Navigazione programmatica — navigare via codice, ad esempio dopo
// l'invio di un form, con l'hook useNavigate.

import { BrowserRouter, Routes, Route, useNavigate } from "react-router";
import { useState } from "react";
import "./comuni.css";

function FormIscrizione() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // logica di invio del form...
    navigate("/conferma");
  }

  return (
    <div className="box">
      <h2 className="titolo">Iscrizione</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <div className="bottone-riga">
          <button className="bottone" type="submit">Iscriviti</button>
        </div>
      </form>
    </div>
  );
}

function PaginaConferma() {
  return (
    <div className="box">
      <span className="badge badge--successo">Iscrizione completata</span>
    </div>
  );
}

function RoutingNavigazione() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormIscrizione />} />
        <Route path="/conferma" element={<PaginaConferma />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutingNavigazione;
