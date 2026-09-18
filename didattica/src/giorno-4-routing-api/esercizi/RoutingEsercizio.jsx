// ESERCIZIO — routing
// Elenco di articoli con link a una pagina di dettaglio (useParams),
// e un bottone "Torna indietro" che usa useNavigate.

import {BrowserRouter, Routes, Route, Link, useParams, useNavigate} from 'react-router';

const articoli = [
  {id: 1, titolo: 'Introduzione a JSX'},
  {id: 2, titolo: 'I componenti'},
  {id: 3, titolo: 'Le props'}
];

function ElencoArticoli() {
  return (
    <div className="box">
      <h2 className="titolo">Articoli</h2>
      {/* soluzione */}
      <ul>
        {articoli.map(articolo => (
          <li key={articolo.id}>
            <Link to={`/articoli/${articolo.id}`}>{articolo.titolo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DettaglioArticolo() {
  // soluzione
  const {id} = useParams();
  // useParams restituisce sempre stringhe: senza Number(id) il confronto
  // con articolo.id (numero) non troverebbe mai corrispondenza
  const articolo = articoli.find(a => a.id === Number(id));

  // soluzione
  const navigate = useNavigate();

  return (
    <div className="box">
      {/* soluzione */}
      {articolo ? <h2 className="titolo">{articolo.titolo}</h2> : <p>Articolo non trovato.</p>}

      {/* soluzione */}
      <button className="bottone" onClick={() => navigate('/')}>
        Torna indietro
      </button>
    </div>
  );
}

function RoutingEsercizio() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ElencoArticoli />} />
        <Route path="/articoli/:id" element={<DettaglioArticolo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutingEsercizio;
