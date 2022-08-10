function adicionar(x, y) {
    return x + y;
};

function subtracao(x, y) {
    return x - y;
};

function multiplicacao(x, y) {
    return x * y;
};

function divisao(x, y) {
    return x / y;
};

console.log("-------------- Teste de Operações / Calculador --------------")

console.log(adicionar(2, 4));
console.log(subtracao(12, 4));
console.log(multiplicacao(3, 5));
console.log(divisao(8, 4));

console.log(divisao(4, 0));

// calculo quadrado do número

function quadradoDoNumero(x) {
    return multiplicacao(x, x);
};

console.log(quadradoDoNumero(8));

// calculo média

function MediaDeTresNumeros(x, y, z) {
    return (divisao((adicionar(x, y) + z), 3))
};

console.log(MediaDeTresNumeros(8, 16, 24));

// calculo porcentagem

function calculaPorcentagem(x, y) {
    return totalPorcentagem = multiplicacao(x, divisao(y, 100))
}

console.log(calculaPorcentagem(200, 25))

// gerador de porcentagem

function geradorDePorcentagem(x, y) {
    return multiplicacao(divisao(x, y), 100)
}

console.log(geradorDePorcentagem(75, 500))