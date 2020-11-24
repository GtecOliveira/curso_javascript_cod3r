const alunos = [
    { nome : 'João', nota: 7.3, bolsista : false},
    { nome : 'Maria', nota: 9.2, bolsista : true},
    { nome : 'Pedro', nota: 9.8, bolsista : false},
    { nome : 'Ana', nota: 8.7, bolsista : true}
]

//Desafio 1: Todos os alunos são bolsistas?
const somenteAttrBolsista  = e => e.bolsista
console.log(alunos.map(somenteAttrBolsista))

console.log(alunos.map(somenteAttrBolsista).reduce((acumulador, valorAtual) => {
    return acumulador && valorAtual
}))

console.log(alunos.map(somenteAttrBolsista).reduce((acumulador, valorAtual) => {
    return acumulador || valorAtual
}))