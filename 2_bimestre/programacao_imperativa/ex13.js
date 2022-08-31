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

    {
        "titular": "Jarret Lafuente",
        "nConta": 9582019689,
        "tipoConta": "Conta Poupança",
        "saldo": 27363
    },

    {
        "titular": "Ansel Ardley",
        "nConta": 1761924656,
        "tipoConta": "Conta Poupança",
        "saldo": 32415
    },

    {
        "titular": "Jacki Shurmer",
        "nConta": 7401971607,
        "tipoConta": "Conta Poupança",
        "saldo": 18789
    },

    {
        "titular": "Jobi Mawtus",
        "nConta": 630841470,
        "tipoConta": "Conta Corrente",
        "saldo": 28776
    },

    {
        "titular": "Thomasin Latour",
        "nConta": 4223508636,
        "tipoConta": "Conta Corrente",
        "saldo": 2177
    },

    {
        "titular": "Lonnie Verheijden",
        "nConta": 185979521,
        "tipoConta": "Conta Poupança",
        "saldo": 25994
    },

    {
        "titular": "Alonso Wannan",
        "nConta": 3151956165,
        "tipoConta": "Conta Corrente",
        "saldo": 7601
    },

    {
        "titular": "Bendite Huggett",
        "nConta": 2138105881,
        "tipoConta": "Conta Poupança",
        "saldo": 33196
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