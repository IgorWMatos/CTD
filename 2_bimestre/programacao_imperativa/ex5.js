// teste da função Math.random()
console.log(Math.random());

// criando função cumprimentar

function cumprimentar(nome, sobrenome) {
    console.log("Olá, " + nome + ' ' + sobrenome + ' ' + "seja bem vindo!");
}

cumprimentar("José", "da Silva")

// exemplo PlayGround

function cumprimentarA(nome) {
    const mensagem = "Olá, sejá bem vindo! "
    console.log(mensagem + nome);
}

cumprimentarA('William')
cumprimentarA('Danilo')

// funções que retornam valores

function multiplicarPorDoisESomarCinco(x) {
    return 2 * x + 5
}

console.log(multiplicarPorDoisESomarCinco(1));
console.log(multiplicarPorDoisESomarCinco(5));
const Erick = 5
console.log(multiplicarPorDoisESomarCinco(Erick));

const valor = multiplicarPorDoisESomarCinco(Erick)
console.log(valor)

//exercícios

// polegadas em centimetros

function polegasEmCentrimentros(polegadas) {
    return console.log(polegadas * 2.54)
};

polegasEmCentrimentros(19)

// function com string que retorne URL

function URLconvert(site) {
    return console.log('www.' + site + '.com.br')
};

URLconvert("minhaurl")

// function com caractére de exclamação

let bemVindo = 'Olá, seja bem vindo ao Hello World';

function colocarExclamacao() {
    return console.log(bemVindo + "!")
};

colocarExclamacao()

// calcular idade cachorro

function calcularIdadeCachorro(anoHumano) {
    return console.log(anoHumano * 7)
}

calcularIdadeCachorro(4)

// calculo valor hora de trabalho

function valorHora(salarioMinimo) {
    return console.log(salarioMinimo / 160)
}

valorHora(998)

// calculo IMC

function calculoIMC(peso, altura) {
    return console.log('Seu IMC de acordo com peso e altura é de ' + (peso / (altura * altura)))
}

calculoIMC(60, 1.65);

calculoIMC(75, 1.75);

calculoIMC(50, 1.60);

// estudo da função .toUpperCase()

let frase = 'sleep nap if it smells like fish eat as much as you wish';

function upperCase(frase) {
    return console.log(frase.toUpperCase());
};

upperCase(frase);

// estudo da função typeOf

function identificarVariavelAntiga(variavelAntiga) {
    return console.log('A variável antiga é um (a) ' + typeof (variavelAntiga));
};

identificarVariavelAntiga("Norte");

// estudo de Math

console.log(Math.random());

console.log(Math.PI);

console.log(Math.PI + 3);