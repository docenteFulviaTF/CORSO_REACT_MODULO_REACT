// Hook personalizzato — funzione che inizia con "use" e può chiamare
// altri hook. Estrae la logica di fetch per riutilizzarla tra più
// componenti, tenendoli puliti e focalizzati sulla presentazione.

import { useState, useEffect } from "react";

function useFetch(url) {
  const [dati, setDati] = useState(null);
  const [caricamento, setCaricamento] = useState(true);
  const [errore, setErrore] = useState(null);

  useEffect(() => {
    async function carica() {
      try {
        setCaricamento(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error("Errore del server");
        const json = await response.json();
        setDati(json);
      } catch (err) {
        setErrore(err.message);
      } finally {
        setCaricamento(false);
      }
    }

    carica();
  }, [url]);

  return { dati, caricamento, errore };
}

export default useFetch;
