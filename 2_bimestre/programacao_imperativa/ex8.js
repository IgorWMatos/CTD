// MESA_09

// let arraysColecoes = ['nome', 23, true];
// console.log(arraysColecoes[2]);

// arraysColecoes[0] = 'josé';
// console.log(arraysColecoes);

// arraysColecoes.push('nova informação', false);
// console.log(arraysColecoes);

// arraysColecoes.unshift('adeus', 12);
// console.log(arraysColecoes);

// arraysColecoes.pop();
// arraysColecoes.shift();
// console.log(arraysColecoes);

// let comparacao1 = [1, 2 ,3];
// let comparacao2 = [1, 2, 4];

// console.log(comparacao1[2] != comparacao2[2]);

// -----------------------------------------------------------------------------------------------------

//ex 1 retornará 5, pois é quantidade de elementos dentro da array.
let numbers = [22, 33, 54, 66, 72];
console.log(numbers.length);

//ex 2 retornará primeiro, spiderman, hulk e ironman, e depois harry, ron e hermione.
let grupoDeAmigos = [["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna", "Patán"]];
console.log(grupoDeAmigos[1], grupoDeAmigos[0]);

//ex 3 retornará o 2 elemento de gruposDeAmigos ["string", "123", "false", 54, true, str], e ["Digital", "House", true].
let str = "uma string qualquer";
let gruposDeAmigos = [[45, 89, 0], ["Digital", "House", true], ["string", "123", "false", 54, true, str]];
console.log(gruposDeAmigos[2], [gruposDeAmigos[2].length - 1]);

console.log('-------------------------------------------------------------------------------');
console.log('Array invertido');

let array = [1, 2, 3];
function imprimirInverso(x) {
    console.log(x[2], x[1], x[0]);
};

imprimirInverso(array);

let array1 = ['tavares', 'oliveira', 'pernambuco'];
imprimirInverso(array1);

console.log('-------------------------------------------------------------------------------');
console.log('Soma de Array');

let soma1 = [2, 4, 6];
let soma2 = [3, 6, 9];

function somarArray(x) {
    console.log(x[0] + x[1] + x[2]);
};

somarArray(soma1);
somarArray(soma2);

console.log('-------------------------------------------------------------------------------');
console.log('Array join');

let arrayJoin = ['c', 'o', 'm', 'p', 'l', 'i', 'c', 'a', 'd', 'o'];

function somarArray(x) {
    console.log(x[0] + x[1] + x[2] + x[3] + x[4] + x[5] + x[6] + x[7] + x[8] + x[9]);
};
somarArray(arrayJoin);
console.log(arrayJoin.join(''))

console.log('-------------------------------------------------------------------------------');
console.log('coleção de filmes');

let filmes = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];

function upperText(filmes) {
    x = filmes;
    xResult = x.toString().toUpperCase();
    return xResult;
};

console.log(upperText(filmes));

console.log('-------------------------------------------------------------------------------');
console.log('coleção de filmes 2');

let filme = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

function unirFilmes(filmes, filme) {
    let sFilmes = filmes.concat(filme);
    return console.log(sFilmes);
};

unirFilmes(filmes, filme);

console.log('-------------------------------------------------------------------------------');
console.log('removendo string errada da array');

let sFilmes = filmes.concat(filme);
let backupLastItem = sFilmes.pop();

console.log(sFilmes);
console.log(backupLastItem);

console.log('-------------------------------------------------------------------------------');
console.log('comparando arrays');

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function scoresComparative(asiaScores, euroScores) {
    return console.log(asiaScores === euroScores);
};

scoresComparative(asiaScores[1], euroScores[1]);
scoresComparative(asiaScores[3], euroScores[3]);