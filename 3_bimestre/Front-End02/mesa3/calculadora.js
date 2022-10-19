const somar = require('./somar');
const subtrair = require('./subtrair');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');

let operacao = [somar, subtrair, multiplicar, dividir];

console.log( 'Você selecionou soma, resultado: '+somar( 2, 2 ) );

console.log( 'Você selecionou subtração, resultado: '+subtrair( 4, 2 ) );

console.log( 'Você selecionou multiplicação, resultado: '+multiplicar( 2, 2 ) );

console.log( 'Você selecionou multiplicação, resultado: '+multiplicar( 0, 2 ) );

console.log( 'Você selecionou divisão, resultado: '+dividir( 4, 2 ) );

console.log( ( 'Você selecionou divisão, resultado: '+dividir( 0, 2 ) ) );