/* Exercício 1 */

// let filmes = ['star wars', 'totoro', 'rocky', 'pulp fiction', 'a vida é bela'];
// let filme = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

// for(let auxiliar = 0; auxiliar<filmes.length; auxiliar++){
//     filmes[auxiliar] = filmes[auxiliar].toUpperCase();
// }
// console.log(filmes);

/* Exercício 2 & 3 */

// function passagemDeElementos(a, b) {
//     let popElement = b.indexOf("Fortnite");
//     b.splice(popElement,1);
//     while (b.length > 0) {
//         a.push(b.pop().toUpperCase());
//     }
// }
// passagemDeElementos(filmes,filme);
// console.log(filmes);

/* Exercício 4 */

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compare(asiaScores, euroScores) {
    let compareAsiaEuro = [];
    for (index = 0; index < asiaScores.length; index++) {
        console.log(compareAsiaEuro[index] = asiaScores[index] === euroScores[index]);
    };
}

compare(asiaScores, euroScores)