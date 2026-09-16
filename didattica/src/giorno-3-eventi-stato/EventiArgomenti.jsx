// Passare argomenti a un handler: serve una arrow function, esatto
// stesso motivo per cui setContatore(contatore + 1) andava chiuso
// in una arrow function nel file UseStateBase.jsx del giorno 2.
// L'oggetto evento arriva comunque come primo parametro dell'handler.

import './comuni.css';

const prodotti = [
  {id: 1, nome: 'Tastiera'},
  {id: 2, nome: 'Mouse'},
  {id: 3, nome: 'Monitor'}
];

function EventiArgomenti() {
  function handleElimina(id) {
    alert('Elimino il prodotto con id:' + id);
  }

  function handleChange(event) {
    console.log('Valore digitato:' + event.target.value);
  }

  return (
    <div className="box">
      <h2 className="titolo">Argomenti e oggetto evento</h2>
      <ul className="lista">
        {prodotti.map(prodotto => (
          <li key={prodotto.id}>
            {prodotto.nome}
            <button className="bottone bottone--secondario" onClick={() => handleElimina(prodotto.id)}>
              Elimina
            </button>
          </li>
        ))}
      </ul>
      <input
        className="input"
        style={{marginTop: '8px'}}
        onChange={handleChange}
        placeholder="Apri la console e scrivi qui"
      />
    </div>
  );
}

export default EventiArgomenti;
