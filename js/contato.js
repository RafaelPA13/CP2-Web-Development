function enviar() {
    const mensagem = document.getElementById('mensagem')
    const nome = document.getElementById('nome')
    const tel = document.getElementById('tel')
    const email = document.getElementById('email')
    const txt = document.getElementById('txt')
    
    if (!nome.value){
        mensagem.textContent = 'Por favor preencha o campo de Nome'
    }
    else if(!tel.value){
        mensagem.textContent = 'Por favor preencha o campo de Telefone'
    }
    else if(!email.value){
        mensagem.textContent = 'Por favor preencha o campo de Email'
    }
    else if (!txt.value){
        mensagem.textContent = 'Por favor preencha o campo de Mensagem'
    }
    else if ((txt.value).length < 3){
        mensagem.textContent = 'Por favor escreva uma mensagem maior'
    }
    else if((txt.value).length > 300){
        mensagem.textContent = 'Por favor escreva uma mensagem menor'
    }
    else { 
        mensagem.textContent = 'Sua mensagem foi enviada'
    }
}