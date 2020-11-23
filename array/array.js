console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)
console.log(aprovados)

aprovados[9] = 'Rafael'

console.log(aprovados.length, aprovados)
console.log(aprovados[8] === undefined)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') //a partir do elemento 1, exclui 2 elementos, e adiciona os dois elementos do parametro
console.log(aprovados)