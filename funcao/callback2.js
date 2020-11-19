const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem callback
let notasBaixas = []

for (let i in notas ) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//Com callback grande
const notasBaixasCallBackGrande = notas.filter(function(value) {
    return value < 7
})
console.log(notasBaixasCallBackGrande)

//Com callback reduzido
const notasBaixasCallBack = notas.filter((value) => value < 7)
console.log(notasBaixasCallBack)

//Com callback extremamente reduzido (sem parenteses)
const notasBaixasCallBack2 = notas.filter(value => value < 7)
console.log(notasBaixasCallBack2)

//Com callback extremamente reduzido extraido em const
const notasMenorQue7 = nota => nota < 7
const notasBaixasCallBack3 = notas.filter(notasMenorQue7)
console.log(notasBaixasCallBack3)


