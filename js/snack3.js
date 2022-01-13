
/*Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.*/

const names = ['Marco', 'Maria', 'Marta', 'Mario', 'Giovanni','Andrea','Francesca'];
const surnames = ['Rossi', 'Verdi', 'Nero', 'Gialli', 'Blu','Ocra'];

const falseNames = [];


while (falseNames.length < 3) {
    const falseName = names[Math.floor(Math.random() * names.length)];
    const falseSurname = surnames[Math.floor(Math.random() * surnames.length)];
    const falseID = falseName + ' ' + falseSurname;
    
    console.log('false completed');

    if (!falseNames.includes(falseID)) {
    falseNames.push(falseID);
    }
}

console.log(falseNames);