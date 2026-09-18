// React Router — navigazione tra "pagine" in una SPA senza mai
// ricaricare la pagina reale.
// Installazione: npm install react-router

import { BrowserRouter, Routes, Route, Link } from "react-router";
import "./comuni.css";

function Home() {
  return <h2 className="titolo">Home</h2>;
}

function Chi() {
  return <h2 className="titolo">Chi siamo</h2>;
}

function Contatti() {
  return <h2 className="titolo">Contatti</h2>;
}

function RoutingBase() {
  return (
    <BrowserRouter>
      <div className="box">
        <nav className="bottone-riga">
          <Link className="bottone bottone--secondario" to="/">Home</Link>
          <Link className="bottone bottone--secondario" to="/chi-siamo">Chi siamo</Link>
          <Link className="bottone bottone--secondario" to="/contatti">Contatti</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<Chi />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="*" element={<p className="sottotitolo">Pagina non trovata</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default RoutingBase;
