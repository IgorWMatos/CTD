let produtosCompra = ['arroz', 'feijao', 'salada', 'tomate'];
console.log(produtosCompra);

// JOIN

console.log('Join junta os elementos dentro de uma array, separando-os com vírgula (default) ou informação alimentada.');
let separacao = produtosCompra.join(', ');
console.log(separacao);

separacao = produtosCompra.join(' - ');
console.log(separacao);

// POP

console.log('Pop serve para eliminar o /último/ elemento dentro da array e retorna o elemento eliminado.');
let ultimaCompra = produtosCompra.pop();

console.log(produtosCompra);
console.log(ultimaCompra);

// PUSH

console.log('Push serve para adicionar um novo elemento no final da array, ao ser chamado via console.log, retorna o length da array.');

let addCompra = produtosCompra.push('Laranja');

console.log(addCompra);
console.log(produtosCompra[3]);

// SHIFT

console.log('Pop serve para eliminar o /primeiro/ elemento dentro da array e retorna o elemento eliminado.');
let primeiraCompra = produtosCompra.shift();

console.log(produtosCompra);
console.log(primeiraCompra);

// UNSHIFT

console.log('Pop serve para adicionar ao /inicio/ de uma array e retorna o novo comprimento da array.');
let novasCompras = produtosCompra.unshift('Leite');

console.log(produtosCompra);
console.log(novasCompras);

novasCompras - produtosCompra.unshift('Biscoitos, Café');
console.log(produtosCompra);
console.log(novasCompras);
console.log(produtosCompra.length);