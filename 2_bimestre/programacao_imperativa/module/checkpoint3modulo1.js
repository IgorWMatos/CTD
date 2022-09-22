function novoAluno(nome, quantidadeDeFaltas, notas = []) {
    this.nome = nome;
    this.quantidadeDeFaltas = quantidadeDeFaltas;
    this.notas = notas
}

module.exports = novoAluno;