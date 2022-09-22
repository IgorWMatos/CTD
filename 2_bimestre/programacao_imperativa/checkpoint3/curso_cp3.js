let novosAlunos = require('./modules/construtorDeAlunos_cp3'); //função construtora de alunos
let alunos = require('./modules/alunos_cp3'); //lista de alunos

console.log(alunos)

let curso = {
    nomeDoCurso : "CTD",
    notaDeAprovacao : 7,
    faltasMaximas : 6,
    listaDeEstudantes : alunos,
    novoEstudante : function(nome, qtdFaltas, nota) {
        this.listaDeEstudantes.push(new novosAlunos(nome, qtdFaltas, nota))
    }
}
curso.novoEstudante("Paulo", 0, [3, 9, 9])
console.log(curso)

/* console.log(curso.novoEstudante('Pedro', 1, [9, 3, 10])) */