/**names.js
   Crea una funzione che accetta due parametri: firstName, lastName.
   La funzione restituisce un oggetto con le proprietà firstName e lastName.
   Esporta la funzione dal file.
*/

const createName = (firstName, lastName) => ({ firstName, lastName });

// Esporta la funzione
module.exports = createName;
