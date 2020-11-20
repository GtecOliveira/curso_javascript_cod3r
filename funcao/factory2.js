function criarProduto(nome, preco){
    return {
        nome : nome,
        preco : preco,
        desconto: 0.1
    }
    /*
    return { //se o nome da propriedade for o mesmo do que quer retornar (nome do parametro) não precisa colocar o ":"
        nome, 
        preco,
        desconto: 0.1
    }
    */
}

console.log(criarProduto('Teclado', 99.99))
console.log(criarProduto('Mouse', 250.99))
console.log(criarProduto('Monitor', 1356.98))