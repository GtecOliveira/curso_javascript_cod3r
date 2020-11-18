function tratarErroELancar(erro) {
    //throw new Error('Entre em contato com suporte')
    //throw 10
    //throw true
    //throw 'Entre em contato com suporte'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
    
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)