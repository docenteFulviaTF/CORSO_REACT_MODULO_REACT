# Esercizio riepilogativo — Giorno 2 (Hooks e Rendering)

## Argomenti coperti

- `useState` (base e con oggetti/array)
- `useEffect` (base e con dipendenze)
- Rendering condizionale
- Rendering di liste

**Esclusi da questo esercizio:** `useMemo`, `useCallback`, `useRef`, gestione degli errori con state dedicato (niente `UseStateErrori`-style).

---

## Consegna

Realizza un'app **Lista Preferiti** (es. film, libri o città — scegli tu il dominio) con due componenti.

### 1. `App` (componente padre)

- Stato principale: un array di oggetti, es.

  ```js
  const [preferiti, setPreferiti] = useState([
    { id: 1, titolo: "Esempio", visto: false }
  ]);
  ```

- Uno state separato per il campo di input testuale (nome del nuovo elemento da aggiungere).
- Un `useEffect` con dipendenza `[preferiti]` che stampa in console la lunghezza dell'array ogni volta che cambia:
  ```js
  useEffect(() => {
    console.log("Numero preferiti:", preferiti.length);
  }, [preferiti]);
  ```

### 2. Aggiunta di un elemento

- Input controllato + bottone "Aggiungi".
- Al click, crea un nuovo oggetto e aggiungilo all'array **senza mutare** quello esistente (usa spread `[...preferiti, nuovo]`).
- Dopo l'aggiunta, svuota il campo di input.

### 3. Rendering della lista

- Componente `ListaPreferiti` che riceve l'array come prop.
- Rendering condizionale: se l'array è vuoto mostra "Nessun preferito ancora", altrimenti mostra la lista.
- Ogni elemento è un `<li key={elemento.id}>` con:
  - il titolo,
  - un checkbox collegato al campo `visto` (al click aggiorna l'oggetto nell'array creando un nuovo array con lo spread, senza mutare l'oggetto originale: `{ ...elemento, visto: !elemento.visto }`),
  - il testo dell'elemento va barrato/in corsivo (con classe CSS condizionale) se `visto` è `true`.
- Un bottone "Rimuovi" per ogni elemento che lo toglie dall'array (`filter`).

### 4. Rendering condizionale extra

- Sopra la lista, mostra un contatore testuale tipo "Hai segnato come visti X elementi su Y", calcolato al momento del render (senza `useMemo`: va bene ricalcolarlo ogni volta con un semplice `.filter().length`).

---

## Requisiti tecnici

- Nessuna mutazione diretta di array o oggetti nello state: sempre nuovi array/oggetti con spread.
- `key` univoca e stabile (usa l'`id`, non l'indice).
- Componenti funzione, props in sola lettura.
- Solo gli hook indicati (`useState`, `useEffect`); niente `useMemo`, `useCallback`, `useRef`.
- Niente state dedicato alla gestione errori: se vuoi impedire l'aggiunta di un campo vuoto, basta un semplice controllo `if` prima di aggiornare lo state, senza un secondo state per l'errore.

## Bonus (facoltativo)

- Aggiungi un secondo `useEffect` (dipendenza sul campo di input) che logga in console il valore digitato ogni volta che cambia, per verificare la differenza tra effetto "ad ogni render" e "solo su dipendenza specifica".
