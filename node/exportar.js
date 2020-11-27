console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome : 'Teste'
}

console.log(module.exports) //o module.exports nao retorna nome porque exports eh apenas uma variavel que aponta para o module, nao o objeto em si

module.exports = {
    publico : true
}