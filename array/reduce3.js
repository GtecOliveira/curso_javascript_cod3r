Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0] 

    for (let index = indiceInicial; index < this.length; index++) {
        const element = this[index];
        acumulador = callback(acumulador, element, index, this)
    }

    return acumulador
}

const soma = (acumulador, numero) => acumulador + numero
const numeros = [1,2,3,4,5,6]

console.log(numeros.reduce2(soma, 10))