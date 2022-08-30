let client1 = ['Abigael Natte', 5486273622, 'Conta Corrente', 27771]
let client2 = ['Ramon Connell', 1183971869, 'Conta Poupança', 8675]
let client3 = ['Jarret Lafuente', 9582019689, 'Conta Poupança', 27363]
let client4 = ['Ansel Ardley', 1761924656, 'Conta Poupança', 32415]
let client5 = ['Jacki Shurmer', 7401971607, 'Conta Poupança', 18789]
let client6 = ['Jobi Mawtus', 630841470, 'Conta Corrente', 28776]
let client7 = ['Thomasin Latour', 4223508636, 'Conta Corrente', 2177]
let client8 = ['Lonnie Verheijden', 185979521, 'Conta Poupança', 25994]
let client9 = ['Alonso Wannan', 3151956165, 'Conta Corrente', 7601]
let client10 = ['Bendite Huggett', 2138105881, 'Conta Poupança', 33196]


/* -------------- */

const conta = {
    titular: 'Jose',
    numeroConta: 234546,
    tipo: 'corrente',
    saldo: 1500.00,
}

const dados = [
    {
        "titular": "Abigael Natte",
        "nConta": 5486273622,
        "tipoConta": "Conta Corrente",
        "saldo": 27771
    },

    {
        "titular": "Ramon Connell",
        "nConta": 1183971869,
        "tipoConta": "Conta Poupança",
        "saldo": 8675
    },

]

function Banco(titular, nConta, tipoConta, saldo) {
    this.titular = titular;
    this.nConta = nConta;
    this.tipoConta = tipoConta;
    this.saldo = saldo;
}

let conta1 = new Banco(dados[0].titular, dados[0].nConta, dados[0].tipoConta, dados[0].saldo);
let listaContas = [];
for (let contador = 0; contador < dados.length; contador++) {
    listaContas.push(new Banco(dados[contador].titular, dados[contador].nConta, dados[contador].tipoConta, dados[contador].saldo))
}

console.log(listaContas)