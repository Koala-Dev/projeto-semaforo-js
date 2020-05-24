let sinal_verde = document.getElementById('verde')
let sinal_amarelo = document.getElementById('amarelo')
let sinal_vermelho = document.getElementById('vermelho')
let count = 1
let tempo = 1
function iniciarSemaforo(){
    sinalverde()
}
function sinalverde(){
    sinal_vermelho.style.backgroundColor = "#808080"
    sinal_vermelho.style.boxShadow = '0px 0px 44px -10px rgb(196, 43, 43, 0)'
    sinal_verde.style.backgroundColor= 'green'
    sinal_verde.style.boxShadow= '0px 0px 44px -10px rgba(130,196,43,1)'
    document.querySelector('#pare').style.color="white"
    document.querySelector('#atencao').style.color="white"
    document.querySelector('#prossiga').style.color="black"
    count = 12 
    tempo = count*1000
    setTimeout(sinalamarelo,tempo)
}
function sinalamarelo(){
    sinal_amarelo.style.backgroundColor = 'orange'
    sinal_amarelo.style.boxShadow = '0px 0px 44px -10px rgb(206, 246, 25)'
    document.querySelector('#pare').style.color="white"
    document.querySelector('#atencao').style.color="black"
    document.querySelector('#prossiga').style.color="white"
    count = 3
    tempo = count*1000
    setTimeout(sinalvermelho,tempo)
}
function sinalvermelho(){
    sinal_vermelho.style.backgroundColor = 'red'
    sinal_vermelho.style.boxShadow = '0px 0px 44px -10px rgb(196, 43, 43)'
    document.querySelector('#pare').style.color="black"
    document.querySelector('#atencao').style.color="white"
    document.querySelector('#prossiga').style.color="white"
    count = 6
    tempo = count*1000
    setTimeout(sinalverde,tempo)
}

