// Esercizio B - Rubrica contatti con ricerca
// Soluzione: componente unico, filtro derivato dallo state di ricerca
// (nessuno state aggiuntivo per la lista filtrata: si ricalcola
// ad ogni render a partire da "contatti" e "ricerca").

import { useState, useRef, useEffect } from 'react';

export default function RubricaContatti() {
  const [contatti, setContatti] = useState([]);
  const [nome, setNome] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [ricerca, setRicerca] = useState('');

  const inputNomeRef = useRef(null);

  useEffect(() => {
    console.log(`Numero di contatti in rubrica: ${contatti.length}`);
  }, [contatti]);

  function handleSubmit(event) {
    event.preventDefault();

    if (nome.trim() === '') {
      return;
    }

    const nuovoContatto = {
      id: Date.now(),
      nome: nome.trim(),
      telefono: telefono.trim(),
      email: email.trim(),
    };

    setContatti([...contatti, nuovoContatto]);
    setNome('');
    setTelefono('');
    setEmail('');
    inputNomeRef.current.focus();
  }

  function handleRimuovi(id) {
    setContatti(contatti.filter((contatto) => contatto.id !== id));
  }

  // Filtro + ordinamento derivati: niente state extra, si ricalcolano
  // ad ogni render a partire da contatti e ricerca.
  const contattiFiltrati = contatti
    .filter((contatto) =>
      contatto.nome.toLowerCase().includes(ricerca.trim().toLowerCase())
    )
    .sort((a, b) => a.nome.localeCompare(b.nome));

  return (
    <div>
      <h1>Rubrica contatti</h1>

      <form onSubmit={handleSubmit}>
        <input
          ref={inputNomeRef}
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="tel"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="Telefono"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button type="submit">Aggiungi contatto</button>
      </form>

      <input
        type="text"
        value={ricerca}
        onChange={(e) => setRicerca(e.target.value)}
        placeholder="Cerca per nome..."
      />

      {contattiFiltrati.length === 0 ? (
        <p>Nessun contatto trovato.</p>
      ) : (
        <ul>
          {contattiFiltrati.map((contatto) => (
            <li key={contatto.id}>
              <strong>{contatto.nome}</strong> — {contatto.telefono} —{' '}
              {contatto.email}{' '}
              <button onClick={() => handleRimuovi(contatto.id)}>
                Rimuovi
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
