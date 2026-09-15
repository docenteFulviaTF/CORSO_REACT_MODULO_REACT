// ESERCIZIO — useState con oggetti/array
// Costruisci un piccolo carrello: un array di articoli con nome e
// prezzo, con la possibilità di aggiungerne uno nuovo.

import { useState } from "react";
import "./comuni.css";

function UseStateOggettiEsercizio() {
  // TODO 1: crea uno stato "carrello", array di oggetti
  // { nome, prezzo }, inizialmente vuoto

  // TODO 2: crea una funzione che aggiunge un articolo fisso al
  // carrello (es. { nome: "Libro", prezzo: 15 }), usando lo spread
  // operator per creare un nuovo array

  // TODO 3 (facoltativo): calcola il totale del carrello sommando
  // i prezzi con .reduce()

  return (
    <div className="box box--tratteggiato">
      <h2 className="titolo">Esercizio: carrello</h2>
      <button className="bottone">Aggiungi un libro</button>

      {/* TODO 4: mostra qui la lista degli articoli nel carrello,
          con .map() e una key stabile */}
    </div>
  );
}

export default UseStateOggettiEsercizio;
