function ListaPreferiti2({ preferiti, onToggleVisto, onRimuovi }) {
  if (preferiti.length === 0) {
    return <p>Nessun preferito ancora</p>;
  }

  return (
    <ul>
      {preferiti.map((elemento) => (
        <li key={elemento.id}>
          <span
            style={
              elemento.visto
                ? { fontStyle: 'italic', textDecoration: 'line-through' }
                : {}
            }
          >
            {elemento.titolo}
          </span>
          <input
            type="checkbox"
            checked={elemento.visto}
            onChange={() => onToggleVisto(elemento.id)}
          />
          <button onClick={() => onRimuovi(elemento.id)}>Rimuovi</button>
        </li>
      ))}
    </ul>
  );
}

export default ListaPreferiti2;
