let valor // nao inicializada
console.log(valor)
//console.log(valor2) its not defined

valor = null //ausencia de valor

console.log(valor)

//console.log(valor.toString()) //Erro pois esta tentando acessar o tostring de null

const produto = {}

console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined //nunca atribuir de forma explicita para undefined

console.log(!!produto.preco)
console.log(produto)

//delete produto.preco
//console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)

