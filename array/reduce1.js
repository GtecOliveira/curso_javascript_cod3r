const alunos = [
    { nome : 'João', nota: 7.3, bolsista : false},
    { nome : 'Maria', nota: 9.2, bolsista : true},
    { nome : 'Pedro', nota: 9.8, bolsista : false},
    { nome : 'Ana', nota: 8.7, bolsista : true}
]

const somenteNota = a => a.nota

console.log(alunos.map(somenteNota))

console.log(alunos.map(somenteNota).reduce(function(acumulador, valorAtual) {
    console.log(acumulador, valorAtual)
    return acumulador + valorAtual
}))

console.log(alunos.map(somenteNota).reduce(function(acumulador, valorAtual) {
    console.log(acumulador, valorAtual)
    return acumulador + valorAtual
},10))