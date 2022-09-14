let pessoas = [
    {
        age: 17,
        opinion: 2
    },
    {
        age: 25,
        opinion: 2
    },
    {
        age: 30,
        opinion: 3
    },
    {
        age: 21,
        opinion: 1
    },
    {
        age: 14,
        opinion: 1
    },
    {
        age: 38,
        opinion: 3
    },
    {
        age: 54,
        opinion: 3
    },
    {
        age: 22,
        opinion: 2
    },
    {
        age: 15,
        opinion: 3
    },
    {
        age: 60,
        opinion: 1
    },
    {
        age: 24,
        opinion: 2
    },
    {
        age: 41,
        opinion: 3
    },
    {
        age: 33,
        opinion: 2
    },
    {
        age: 16,
        opinion: 1
    },
    {
        age: 26,
        opinion: 2
    }
];

//1
let otimo = pessoas.filter(nota => nota.opinion == 3);
let avgOtimo = otimo.reduce((total, next) => total + next.age, 0) / otimo.length;

console.log(avgOtimo);

//2

let regular = pessoas.filter(nota => nota.opinion == 1).length;
console.log(regular);

//3

let bom = pessoas.filter(nota => nota.opinion == 2).length;
let bomPercentage = (bom / pessoas.length)*100 + '%';

console.log(bomPercentage)