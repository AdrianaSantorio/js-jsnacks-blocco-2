/*
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.
*/

// let sum = 0;

// for (let i=1; i <=5; i++) {
//     const number = parseInt(prompt(`inserire un numero (${i}/5)`).trim());
//     if (!isNaN(number)) {
//         sum += number;
//     }
// }

// console.log(sum);

console.log('JS OK');

let sum = 0;
let i = 1;

while (i <= 5) {
    const number = parseInt(prompt(`inserire un numero (${i}/5)`).trim());
    if (!isNaN(number)) {
    sum += number;
    i++;
    }
}

console.log(sum);

