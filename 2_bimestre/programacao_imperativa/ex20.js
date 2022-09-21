const lista = require('./module/scores');

//1
let otimo = lista.filter(nota => nota.opinion == 3);
let avgOtimo = otimo.reduce((total, next) => total + next.age, 0) / otimo.length;

console.log(avgOtimo);

//2
let regular = lista.filter(nota => nota.opinion == 1).length;
console.log(regular);

//3
let bom = lista.filter(nota => nota.opinion == 2).length;
let bomPercentage = (bom / lista.length)*100 + '%';
console.log(bomPercentage)

function Espectator(opinion, age){
    this.opinion = opinion;
    this.age = age
}

lista.push(new Espectator(1,64));

console.log(Espectator(15));