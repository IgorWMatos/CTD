// teste da função Math.random()
console.log(Math.random());

// criando função cumprimentar

let nome = "José";
let sobrenome = "da Silva";

function cumprimentar() {
    console.log("Olá, " + nome + ' ' + sobrenome + ' ' + "seja bem vindo!");
}

cumprimentar()

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

let polegadas = 19;

function polegasEmCentrimentros() {
    return console.log(polegadas * 2.54)
};

polegasEmCentrimentros()

// function com string que retorne URL

let site = 'minhaurl';

function URLconvert() {
    return console.log('www.' + site + '.com.br')
};

URLconvert()

// function com caractére de exclamação

let bemVindo = 'Olá, seja bem vindo ao Hello World';

function colocarExclamacao() {
    return console.log(bemVindo + "!")
};

colocarExclamacao()

// calcular idade cachorro

let anoHumano = 4;

function calcularIdadeCachorro() {
    return console.log(anoHumano * 7)
}

calcularIdadeCachorro()

// calculo valor hora de trabalho

let salarioMinimo = 998

function valorHora() {
    return console.log(salarioMinimo / 160)
}

valorHora()

// calculo IMC

let peso = 90;
let altura = 1.70;

function calculoIMC(peso, altura) {
    return console.log('Seu IMC de acordo com peso e altura é de ' + (peso / (altura * altura)))
}

calculoIMC(peso, altura);

peso = 90;
altura = 1.90;

calculoIMC(peso, altura);

peso = 60;
altura = 1.80;

calculoIMC(peso, altura);

// estudo da função .toUpperCase()

let frase = 'sleep nap if it smells like fish eat as much as you wish';

function upperCase(frase) {
    return console.log(frase.toUpperCase());
};

upperCase(frase);

// estudo da função typeOf

let variavelAntiga = 'Norte'

function identificarVariavelAntiga(variavelAntiga) {
    return console.log('A variável antiga é um (a) ' + typeof (variavelAntiga));
};

identificarVariavelAntiga(variavelAntiga);

// estudo de Math

console.log(Math.PI);