/* Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo*/

//1- creare un numero
//2- verificare se è pari o dispari
//3- se è pari, vai a 5
//4- se è dispari, aggiungere uno
//5- stamparlo in console

console.log('JS OK');

//1
//let number = Math.floor(Math.random() * 100 +1);

//or
let number = parseInt(prompt('Inserire un numero'));

//2
while (number % 2) {
   //4
    number += 1;
}

//5
console.log(number);