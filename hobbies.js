/**hobbies.js
   Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree.
   La funzione restituisce un oggetto con una proprietà hobbies, che è un array di hobby.
   Esporta la funzione dal file.
*/

const createHobbies = (hobbyOne, hobbyTwo, hobbyThree) => ({
  hobbies: [hobbyOne, hobbyTwo, hobbyThree],
});

// Esporta la funzione
module.exports = createHobbies;
