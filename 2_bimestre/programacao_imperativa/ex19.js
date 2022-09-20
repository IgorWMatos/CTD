const lista = require('./module/pessoas');


//1
const maisAlta = lista.reduce(function (menor, maior) {
    return menor.altura < maior.altura ? maior : menor;
});

console.log('pessoa mais alta', maisAlta);

//2
const menosAlta = lista.reduce(function (menor, maior) {
    return menor.altura > maior.altura ? maior : menor;
});

console.log('pessoa menos alta', menosAlta);

//3
let avgF = lista.filter((gender) => gender.sexo == "F");
let avgFem = avgF.reduce((sum, gender) => sum + parseFloat(gender.altura), 0) / avgF.length;

console.log(avgFem)

//4
const countSex = lista.filter(contagem => {
    if (contagem.sexo == 'M') {
        return true;
    }

    return false;
}).length;

console.log(countSex);