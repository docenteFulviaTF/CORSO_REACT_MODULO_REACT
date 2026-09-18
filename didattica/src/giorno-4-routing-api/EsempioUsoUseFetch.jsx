// Utilizzo dell'hook personalizzato useFetch in due componenti
// diversi: la stessa logica di caricamento viene riusata senza
// riscriverla.

import useFetch from "./UseFetchHook.js";
import "./comuni.css";

function ListaUtenti() {
  const { dati, caricamento, errore } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (caricamento) return <p className="sottotitolo">Caricamento utenti...</p>;
  if (errore) return <span className="badge badge--errore">{errore}</span>;

  return (
    <ul className="lista">
      {dati.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

function ListaAlbum() {
  const { dati, caricamento, errore } = useFetch("https://jsonplaceholder.typicode.com/albums?_limit=5");

  if (caricamento) return <p className="sottotitolo">Caricamento album...</p>;
  if (errore) return <span className="badge badge--errore">{errore}</span>;

  return (
    <ul className="lista">
      {dati.map((a) => (
        <li key={a.id}>{a.title}</li>
      ))}
    </ul>
  );
}

function EsempioUsoUseFetch() {
  return (
    <div className="box">
      <h2 className="titolo">Utenti</h2>
      <ListaUtenti />
      <h2 className="titolo" style={{ marginTop: "16px" }}>Album</h2>
      <ListaAlbum />
    </div>
  );
}

export default EsempioUsoUseFetch;
