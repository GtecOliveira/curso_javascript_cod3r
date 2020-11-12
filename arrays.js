const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10

console.log(valores[10])
console.log(valores[6])
console.log(valores)

valores.push({id: 3}, false, true, null, 'teste')

console.log(valores)

console.log(valores.pop()) //retira o ultimo objeto do array

delete valores[0] //deleta em posicao especifica

console.log(valores)