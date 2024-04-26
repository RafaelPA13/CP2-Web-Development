const conteudo = document.querySelector('.conteudo')
const popup = document.getElementById('popup')

function aviso(){
    conteudo.classList.add('esconder')
    popup.classList.remove('esconder')
    popup.classList.add('popup')
}
function esconder(){
    conteudo.classList.add('conteudo')
    conteudo.classList.remove('esconder')
    popup.classList.add('esconder')
}