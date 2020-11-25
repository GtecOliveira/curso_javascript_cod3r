const escola = [
    {
        nome: 'Turma M1',
        alunos : [
            {
                nome: 'Gustavo',
                nota: 8.1
            },
            {   
                nome: 'Ana',
                nota: 9.3
            }
        ]
    },
    {
        nome: 'Turma M2',
        alunos : [
            {
                nome: 'Rebeca',
                nota: 8.9
            },
            {   
                nome: 'Roberto',
                nota: 7.3
            }
        ]
    }
]

const somenteNota = aluno => aluno.nota
const mapTurma = turma => turma.alunos.map(somenteNota)

console.log(escola.map(mapTurma))

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

console.log(escola.flatMap(mapTurma))

