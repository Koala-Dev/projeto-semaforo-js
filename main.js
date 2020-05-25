let sinal_verde1 = document.getElementById('verde1')
let sinal_amarelo1 = document.getElementById('amarelo1')
let sinal_vermelho1 = document.getElementById('vermelho1')
let sinal_verde2 = document.getElementById('verde2')
let sinal_amarelo2 = document.getElementById('amarelo2')
let sinal_vermelho2 = document.getElementById('vermelho2')
let sinal_verde3 = document.getElementById('verde3')
let sinal_amarelo3 = document.getElementById('amarelo3')
let sinal_vermelho3 = document.getElementById('vermelho3')
let sinal_verde4 = document.getElementById('verde4')
let sinal_amarelo4 = document.getElementById('amarelo4')
let sinal_vermelho4 = document.getElementById('vermelho4')
let count = 1
let tempo = 1
let ImparOuPar1 = 1
let ImparOuPar2 = 1

function iniciarSemaforo(){
    tempo_1()
}

function tempo_1(){
    //desliga vermelho 2 e 4
    sinal_vermelho2.style.backgroundColor = 'gray'
    sinal_vermelho4.style.backgroundColor = 'gray'
    //desliga amarelo  2 e 4
    sinal_amarelo2.style.backgroundColor = 'gray'
    sinal_amarelo4.style.backgroundColor = 'gray'
    //desliga amarelo  1 e 3
    sinal_amarelo1.style.backgroundColor = 'gray'
    sinal_amarelo3.style.backgroundColor = 'gray'
    //acende vermelho 1 e 3
    sinal_vermelho1.style.backgroundColor = 'red'
    sinal_vermelho3.style.backgroundColor = 'red'
    // acende verde 2 e 4
    sinal_verde2.style.backgroundColor= 'green'
    sinal_verde4.style.backgroundColor= 'green'
    count = 5
    tempo = count*1000
    setTimeout(tempo_2,tempo)
}
function tempo_2(){
    // desliga verde 2 e 4
    sinal_verde2.style.backgroundColor= 'gray'
    sinal_verde4.style.backgroundColor= 'gray'
    // acende amarelo 2 e 4 
    sinal_amarelo2.style.backgroundColor = 'orange'
    sinal_amarelo4.style.backgroundColor = 'orange'
    count = 2
    tempo = count*1000
    setTimeout(tempo_3,tempo)
}
function tempo_3(){
    //desliga vermelho 1 e 3 
    sinal_vermelho1.style.backgroundColor = 'gray'
    sinal_vermelho3.style.backgroundColor = 'gray'
    //desliga amarelo  2 e 4
    sinal_amarelo2.style.backgroundColor = 'gray'
    sinal_amarelo4.style.backgroundColor = 'gray'
    //acende verde 1 e 3
    sinal_verde1.style.backgroundColor= 'green'
    sinal_verde3.style.backgroundColor= 'green'
    //acende vermelho 2 e 4 
    sinal_vermelho2.style.backgroundColor = 'red'
    sinal_vermelho4.style.backgroundColor = 'red'
    count = 5
    tempo = count*1000
    setTimeout(tempo_4,tempo)
}
function tempo_4(){
    sinal_verde1.style.backgroundColor= 'gray'
    sinal_verde3.style.backgroundColor= 'gray'
    sinal_amarelo1.style.backgroundColor = 'orange'
    sinal_amarelo3.style.backgroundColor = 'orange'
    count = 2
    tempo = count*1000
    setTimeout(tempo_1,tempo)
}

