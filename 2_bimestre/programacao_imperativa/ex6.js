/* EXERCÍCIO UM */

// 1 - !false retornará true
console.log(!false);

// 2 - !true retornará false
console.log(!true);

// 3 - !!false true retornará erro, necessita de vírgula. retornará false true
console.log(!!false, true);

// 4 - !!true retornará true
console.log(!!true);

// 5 - !1 retornará false
console.log(!1);

// 6 - !!1 retornará true
console.log(!!1);

// 7 - !0 retornará true
console.log(!0);

// 8 - !!0 retornará false
console.log(!!0);

// 9 - !!"" retornará false
console.log(!!"");

//10 - let x = 5 let y = 9;
let x = 5;
let y = 9;

// 10a x < 10 && x!==5 retornará false. x é menor que 10, porém 'x!==5' é falso.
console.log(x < 10 && x !== 5);

//10b x > 9 || x===5 retornará true, pois x é menor que 9 e x é = 5.
console.log(x > 9 || x === 5);

//10c !(x===y) retornará false.
console.log(!x === y);



/* EXERCÍCIO DOIS */

// 1 - let x=10;
//     let y ="a";
//     y==="b" || x >= 10;
// Resposta: true, porque x >= 10 é verdadeiro, mesmo que y === "a" não seja verdadeiro. Uma das operações é verdadeiro, e o || (ou), permite ter apenas um resultado verdadeiro.
// Prova real:
let q = 10
let w = "a";
console.log(w === "b" || q >= 10);


// 2 - let x = 3;
//     let y = 8;
//     !( x == "3" || x === y) && !(y !== 8 && x <= y)
// Resposta: False. No primeiro parênteses, x === y corresponde pois é diferente, porém, em ambos os casos do segundo parênteses os valores retornados são diferentes.
// Prova real:
let e = 3;
let r = 8;
console.log(!(e == "3" || e === r) && !(r !== 8 && e <= r));

// 3 - let str = ""
//     let msg = "haha!"
//     let eBonito = "false"
//     (!((str || msg) && eBonito))
// Resposta: False, pois todos são string, e a equação pergunta se os itens são diferentes.
// Prova real:
let str = "";
let msg = "haha!";
let eBonito = "false";
console.log(!((str || msg) && eBonito));