// Invio di dati (POST) — si aggiungono method, headers e body alla
// chiamata fetch. Funzione di servizio, separata dal componente che
// la usa (vedi EsempioUsoPost.jsx).

async function inviaForm(dati) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dati),
  });

  if (!response.ok) throw new Error("Errore nell'invio");

  return await response.json();
}

export default inviaForm;
