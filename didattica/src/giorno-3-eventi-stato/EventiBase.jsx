// Gestione degli eventi — nomi in camelCase, valore = funzione (non
// stringa). Si passa il riferimento alla funzione, mai la sua
// invocazione.

import './comuni.css';

function EventiBase() {
  function handleClick() {
    alert('Bottone cliccato!');
  }

  return (
    <div className="box">
      <h2 className="titolo">Click semplice</h2>
      {/* NON Corretto:non onClick={handleClick()} */}
      <button className="bottone" onClick={handleClick}>
        Cliccami
      </button>
      <button className="bottone" onClick={e => alert(e.target.innerText)}>
        Replica
      </button>
    </div>
  );
}

export default EventiBase;
