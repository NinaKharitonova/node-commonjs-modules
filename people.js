/**Lavoriamo con i moduli commonjs esportando e importando valori e funzioni. 
 * Segui questi tre step creando i rispettivi files:
 * 

  
   All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
  
*/

//people.js

//Importa la tua funzione da names.js
const createName = require("./name");

//Importa la tua funzione da hobbies.js
const createHobbies = require("./hobbies");

//Crea una funzione che non ha parametri.
const createPerson = () => {
  const { firstName, lastName } = createName("John", "Doe");

  const { hobbies } = createHobbies("Reading", "Cycling", "Traveling");

  return {
    firstName,
    lastName,
    hobbies,
  };
};

//La funzione dovrebbe restituisce un oggetto con tre proprietà: firstName, lastName, hobbies.
const person = createPerson();
console.log(person);
