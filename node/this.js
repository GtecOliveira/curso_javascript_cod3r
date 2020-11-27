console.log(this === global) //this fora de função NÃO aponta para global (bom)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...', this === exports)
    console.log('Dentro de uma função...', this === module.exports)
    console.log('Dentro de uma função...', this === global) //this dentro de função aponta para global (ruim)
}

logThis()