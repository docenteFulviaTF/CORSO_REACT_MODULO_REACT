// Invio di dati (POST) — si aggiungono method, headers e body alla
// chiamata fetch. Funzione di servizio, separata dal componente che
// la usa (vedi EsempioUsoPost.jsx).
const URL_FETCH = import.meta.env.VITE_URL_FETCH_PLACEHOLDER;
console.log(URL_FETCH);
async function inviaForm(dati) {
  const response = await fetch(
    //'https://jsonplaceholder.typicode.com/posts'
    URL_FETCH,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dati)
    }
  );

  if (!response.ok) throw new Error("Errore nell'invio");

  let result = await response.json();
  console.log('result ', result);
  return result;
}

export default inviaForm;
