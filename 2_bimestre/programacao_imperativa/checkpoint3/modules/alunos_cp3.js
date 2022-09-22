let novosAlunos = require('./construtorDeAlunos_cp3'); //função construtora de alunos

let alunos =[ (new novosAlunos('Jose', 2, [6, 9, 7])) ];
alunos.push(new novosAlunos('Pedro', 1, [8, 8, 7]));
alunos.push(new novosAlunos('Mauricio', 0, [9, 8, 9]));
alunos.push(new novosAlunos('Renata', 0, [10, 7, 9]));
alunos.push(new novosAlunos('Igor', 0, [9, 7, 10]));

module.exports = alunos;