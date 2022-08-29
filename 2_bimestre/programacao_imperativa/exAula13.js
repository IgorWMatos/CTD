function Banco(titular, nConta, tipoConta, saldo) {
    this.titular = titular;
    this.nConta = nConta;
    this.tipoConta = tipoConta;
    this.saldo = saldo;
}

let clienteUm = new Banco("Abigael Natte", 5486273622, "Conta Corrente", 27771);

let clienteDois = new Banco("Ramon Connell", 1183971869, "Poupança", 8675);

let clienteTres = new Banco("Jarret Lafuente", 9582019689, "Conta Poupança", 27363);

let clienteQuatro = new Banco("Ansel Ardley", 1761924656, "Conta Poupança", 32415);

let clienteCinco = new Banco("Jacki Shurmer", 7401971607, "Conta Poupança", 18789);

let clienteSeis = new Banco("Jobi Mawtus", 630841470, "Conta Corrente", 28776);

let clienteSete = new Banco("Thomasin Latour", 4223508636, "Conta Corrente", 2177);

let clienteOito = new Banco("Lonnie Verheijden", 185979521, "Conta Poupança", 25994);

let clienteNove = new Banco("Alonso Wannan", 3151956165, "Conta Corrente", 7601);

let clienteDez = new Banco("Bendite Huggett", 2138105881, "Conta Poupança", 33196);

let objetoLiteral = { titular: "Bendite Huggett", nConta: 2138105881, tipoConta: "Conta Poupança", saldo: 33196 };
let dadosConvertidos = JSON.stringify(objetoLiteral);

console.log(dadosConvertidos);

dadosConvertidos = JSON.parse(dadosConvertidos);
console.log(dadosConvertidos)