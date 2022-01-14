/* Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari */

//1 - decidi la lunghezza dell' array
//2 - inserisci numeri casuali finchè l' array non è di quella lunghezza
//3 - individua i numeri in posizione dispari
//4 - fai la somma

const numbers = [];

//1
const numbersLength = Math.floor(Math.random()*100 +1);
console.log(numbersLength);

//2
do {
    const number = Math.floor(Math.random()*100 +1);
    numbers.push(number);

} while (numbers.length < numbersLength)

console.log(numbers);

// let sum = 0;

// for (let i=1; i<numbers.length; i+=2) {
//     sum += numbers[i];
//     console.log(numbers[i]);
// }
//
//console.log(sum);

//o

let sum = 0;
let i =1;

while (i < numbers.length) {
    //3, 4
    sum += numbers[i];
    console.log(numbers[i]);
    i += 2;
}


//todo aggiungere la versione con l' if che è quella che ha fatto vedere MArco durante la correzione

console.log(sum);
