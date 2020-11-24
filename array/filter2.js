Array.prototype.filter2 = function(callback) {
    const arrayFiltrado = []

    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if (callback(element, index, this)) {
            arrayFiltrado.push(element) 
        }
    }

    return arrayFiltrado
}

const produtos = [
    { nome: 'Notebook' , preco: 2499, fragil : true},
    { nome: 'iPad Pro' , preco: 4199, fragil : true},
    { nome: 'Copo de Vidro' , preco: 12.49, fragil : true},
    { nome: 'Copo de Plástico' , preco: 18.99, fragil : false}
]

console.log(produtos.filter2(function(p) {
    return p.fragil
}))

console.log(produtos.filter2(function(p) {
    return p.preco > 100
}))

const produtosFrageis = e => e.fragil
const produtosCaros = e => e.preco >= 2500

console.log(produtos.filter2(produtosCaros).filter2(produtosFrageis))