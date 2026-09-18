import {useLibreriaCtx} from '../context/LibreriaContext';
import SezioneRicerca from '../components/SezioneRicerca';

export default function Cerca() {
  const {aggiungiLibro} = useLibreriaCtx();

  return (
    <main>
      <section className="hero">
        <h1>Cerca un libro</h1>
        <p>Cerca tra milioni di titoli e aggiungili alla tua libreria.</p>
      </section>
      <SezioneRicerca onAggiungi={aggiungiLibro} />
    </main>
  );
}
