function teste1(num) {
    if(num > 7)
        console.log(num)          //NAO FAZER ISSO, SEMPRE USAR A CHAVE
    
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7) ;  //ponto e virgula encerra a estrutura de controle //CUIDADO
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)
