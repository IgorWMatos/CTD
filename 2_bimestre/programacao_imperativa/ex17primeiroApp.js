let pessoas = [
    {
        altura: 1.90,
        sexo: 'M'
    },
    {
        altura: 1.67,
        sexo: 'M'
    },
    {
        altura: 1.64,
        sexo: 'F'
    },
    {
        altura: 1.52,
        sexo: 'F'
    },
    {
        altura: 1.75,
        sexo: 'F'
    },
    {
        altura: 1.90,
        sexo: 'M'
    },
    {
        altura: 1.56,
        sexo: 'F'
    },
    {
        altura: 1.71,
        sexo: 'F'
    },
    {
        altura: 1.70,
        sexo: 'M'
    },
    {
        altura: 1.64,
        sexo: 'F'
    },
    {
        altura: 1.82,
        sexo: 'M'
    },
    {
        altura: 1.67,
        sexo: 'F'
    },
    {
        altura: 1.73,
        sexo: 'M'
    },
    {
        altura: 1.62,
        sexo: 'M'
    },
    {
        altura: 1.51,
        sexo: 'F'
    }
]

//1
const maisAlta = pessoas.reduce(function (menor, maior) {
    return menor.altura < maior.altura ? maior : menor;
});

console.log('pessoa mais alta', maisAlta);

//2
const menosAlta = pessoas.reduce(function (menor, maior) {
    return menor.altura > maior.altura ? maior : menor;
});

console.log('pessoa menos alta', menosAlta);

//3
let avgF = pessoas.filter((gender) => gender.sexo == "F");
let avgFem = avgF.reduce((sum, gender) => sum + parseFloat(gender.altura), 0) / avgF.length;

console.log(avgFem)

//4
const countSex = pessoas.filter(contagem => {
    if (contagem.sexo == 'M') {
        return true;
    }

    return false;
}).length;

console.log(countSex);