Array.prototype.map2 = function(callback) {
    const retornoArray = []

    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        retornoArray.push(callback(element, index, this))
    }

    return retornoArray
}

const carrinho = [
    '{ "nome" : "Borracha", "preco": 3.45 }',
    '{ "nome" : "Caderno", "preco": 13.90 }',
    '{ "nome" : "Kit de Lapis", "preco": 41.22 }',
    '{ "nome" : "Caneta", "preco": 7.50 }'
]

//Retornar um array apenas com os preços


const apenasNumeros = e => JSON.parse(e).preco
const resultado = carrinho.map2(apenasNumeros)

console.log(resultado)