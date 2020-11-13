console.log(typeof Object)
console.log(typeof new Object)
console.log(typeof new Object())

const Cliente = function () {}

console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} //ES 2015 (ES6) essa maneira de declarar "class" é a forma reduzida de se fazer const Produto = function () {} (internamente é uma declaracao de funcao)

console.log(typeof Produto)
console.log(typeof new Produto)