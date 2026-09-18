// Parametri di route — segmenti dinamici nel percorso, letti con
// l'hook useParams. Qui con dei link di prova per navigare tra
// prodotti diversi senza ricaricare la pagina.

import { BrowserRouter, Routes, Route, Link, useParams } from "react-router";
import "./comuni.css";

const prodotti = [
  { id: 1, nome: "Tastiera meccanica" },
  { id: 2, nome: "Monitor 27 pollici" },
  { id: 3, nome: "Webcam HD" },
];

function DettaglioProdotto() {
  const { id } = useParams();
  const prodotto = prodotti.find((p) => p.id === Number(id));

  return (
    <div className="box">
      <h2 className="titolo">Dettaglio prodotto</h2>
      <p className="sottotitolo">
        ID nell'URL: {id} — {prodotto ? prodotto.nome : "non trovato"}
      </p>
    </div>
  );
}

function RoutingParametri() {
  return (
    <BrowserRouter>
      <div className="box">
        <nav className="bottone-riga">
          {prodotti.map((p) => (
            <Link key={p.id} className="bottone bottone--secondario" to={`/prodotti/${p.id}`}>
              {p.nome}
            </Link>
          ))}
        </nav>

        <Routes>
          <Route path="/prodotti/:id" element={<DettaglioProdotto />} />
          <Route path="/" element={<p className="sottotitolo">Scegli un prodotto sopra</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default RoutingParametri;
