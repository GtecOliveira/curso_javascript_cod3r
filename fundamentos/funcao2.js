//Armazenando uma funcao em uma variavel

const imprimirSoma = function (a,b) {
    console.log(a+b)
}

imprimirSoma(2,3)

//Armazenando uma funcao arrow em uma variavel

const soma = (a,b) => {
    return a + b
}

console.log(soma(3,3))

//retorno implicito com arroy function

const subtracao = (a, b) => a - b
console.log(subtracao(6,4))

//super reduzido (unico parametro)
const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')