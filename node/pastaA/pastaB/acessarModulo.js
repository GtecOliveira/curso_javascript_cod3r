const moduloA = require('../../moduloA') //tomar cuidado com letras maiusculas e minustulas
console.log(moduloA.ola)

const moduloC = require('./pastaC')
console.log(moduloC.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)

