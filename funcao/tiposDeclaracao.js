console.log(soma(3,4)) //quando nao eh setada em constante, posso chamar a função antes dela

//function declaration
function soma(x, y) {
    return x + y
}

//function expression
const sub = function (x, y) { //quando eh setada em constante, não posso chamar a função antes dela
    return x - y
}

console.log(sub(3,4))

//named function expression
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3,4))