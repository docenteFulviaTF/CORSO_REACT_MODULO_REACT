// ESERCIZIO — fetch
// Carica la lista dei post da jsonplaceholder e mostra titolo e id,
// gestendo caricamento ed errore. Usa la sintassi che preferisci
// (.then o async/await).

import {useState, useEffect} from 'react';

function FetchEsercizio() {
  // soluzione
  const [post, setPost] = useState([]);
  const [caricamento, setCaricamento] = useState(true);
  const [errore, setErrore] = useState(null);

  useEffect(() => {
    // soluzione
    async function caricaPost() {
      try {
        const risposta = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!risposta.ok) throw new Error('Errore API ' + risposta.status);
        const dati = await risposta.json();
        // limitiamo i risultati per non riempire la pagina
        setPost(dati.slice(0, 5));
      } catch (err) {
        setErrore(err.message);
      } finally {
        setCaricamento(false);
      }
    }

    caricaPost();
  }, []);

  // soluzione
  if (caricamento) return <p>Caricamento...</p>;
  if (errore) return <p>Si è verificato un errore: {errore}</p>;

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: lista post</h2>
      {/* soluzione */}
      <ul>
        {post.map(p => (
          <li key={p.id}>
            #{p.id} — {p.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchEsercizio;
