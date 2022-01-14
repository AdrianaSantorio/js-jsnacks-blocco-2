
/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
*/

//1 - decidi la lunghezza dell' array
//2 - inserisci numeri casuali finchè l' array non è di quella lunghezza
//3 - individua l' array con meno elementi
//4 - Aggiungi elementi casuali all’array che ha meno elementi,fino a quando ne avrà tanti quanti l’altro.

console.log('JS OK');

const firstList = [];
const secondList = [];

//1
const firstListLength = Math.floor(Math.random()*100 +1);
console.log(firstListLength);
const secondListLength = Math.floor(Math.random()*100 +1);
console.log(secondListLength);

//2
do {
    const number = Math.floor(Math.random()*100 +1);
    firstList.push(number);

} while (firstList.length < firstListLength)

console.log(firstList);

//2
do {
    const number = Math.floor(Math.random()*100 +1);
    secondList.push(number);

} while (secondList.length < secondListLength)

console.log(secondList);

//3-4
while (!(secondList.length === firstList.length)) {

    if  (secondList.length > firstList.length) {
        const number = Math.floor(Math.random()*100 +1);
        firstList.push(number);
    } else if (secondList.length < firstList.length){
        const number = Math.floor(Math.random()*100 +1);
        secondList.push(number);
    }
}

console.log(firstList.length,secondList.length);