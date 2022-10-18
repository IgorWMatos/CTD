let novosAlunos = function novoAluno(nome, quantidadeDeFaltas, notas = []) {
    this.nome = nome;
    this.quantidadeDeFaltas = quantidadeDeFaltas;
    this.notas = notas;
    this.calcularMedia = (this.notas.reduce(function(calcularMedia, i) { return calcularMedia + i; }) / notas.length);
    this.faltas = function() { return this.qtdFaltas++; };
}

module.exports = novosAlunos;
