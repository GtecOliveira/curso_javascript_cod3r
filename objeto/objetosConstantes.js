//pessoa -> end memoria 123 -> {...}
const pessoa = {nome : 'João'}
pessoa.nome = 'Pedro' //PODE ATRIBUIR UMA PROPRIEDADE DE UM OBJETO CONST
console.log(pessoa)

//pessoa -> end memoria 456 -> {...} (tentando atribuir um novo objeto a const)
//pessoa = {nome : 'Ana'} // ISSO NAO PODE

Object.freeze(pessoa) //Impede qualquer atribuição nova (NAO GERA ERRO) - TRANSFORMA TODO O OBJETO EM CONSTANTE, INCLUSIVE AS PROPRIEDADES E FUNÇÕES
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome : 'João'})
console.log(pessoaConstante)
pessoaConstante.nome = 'José'
console.log(pessoaConstante)