let novosAlunos = require('./modules/construtorDeAlunos_cp3'); //função construtora de alunos
let alunos = require('./modules/estudantes'); //lista de alunos

let curso = {
    nomeDoCurso: "CTD",
    notaDeAprovacao: 7,
    faltasMaximas: 6,
    listaDeEstudantes: alunos,
    novoEstudante: function (nome, qtdFaltas, nota) { this.listaDeEstudantes.push(new novosAlunos(nome, qtdFaltas, nota)) },
    aprovacaoCurso: function (alunos) {
        let a = alunos;
        if (a.calcularMedia >= this.notaDeAprovacao && a.quantidadeDeFaltas < this.faltasMaximas) {
            return true
        } else if (a.calcularMedia >= this.notaDeAprovacao * 1.1 && a.quantidadeDeFaltas == this.faltasMaximas) {
            return true
        } else {
            return false
        }
    },
    aprovacaoClasse: function () {
        let alunosAprovados = [];
        this.listaDeEstudantes.forEach(alunos => alunosAprovados.push(this.aprovacaoCurso(alunos)));
        return alunosAprovados;
    }
}

console.log(curso)