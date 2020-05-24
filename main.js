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
    document.querySelector('#pare').style.display="hidden"
    document.querySelector('#atencao').style.display="hidden"
    document.querySelector('#prossiga').style.display="show"
    count = 10
    tempo = count*1000
    setTimeout(sinalamarelo,tempo)
}
function sinalamarelo(){
    sinal_verde.style.backgroundColor= "#808080"
    sinal_verde.style.boxShadow= '0px 0px 44px -10px rgba(130,196,43,0)'
    sinal_amarelo.style.backgroundColor = 'orange'
    sinal_amarelo.style.boxShadow = '0px 0px 44px -10px rgb(206, 246, 25)'
    document.querySelector('#pare').style.display="hidden"
    document.querySelector('#atencao').style.display="show"
    document.querySelector('#prossiga').style.display="hidden"
    count = 2
    tempo = count*1000
    setTimeout(sinalvermelho,tempo)
}
function sinalvermelho(){
    sinal_amarelo.style.backgroundColor = "#808080"
    sinal_amarelo.style.boxShadow = '0px 0px 44px -10px rgb(206, 246, 25, 0)'
    sinal_vermelho.style.backgroundColor = 'red'
    sinal_vermelho.style.boxShadow = '0px 0px 44px -10px rgb(196, 43, 43)'
    document.querySelector('#pare').style.display="show"
    document.querySelector('#atencao').style.display="hidden"
    document.querySelector('#prossiga').style.display="hidden"
    count = 5
    tempo = count*1000
    setTimeout(sinalverde,tempo)
}

