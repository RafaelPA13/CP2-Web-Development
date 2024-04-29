function showLoginForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var usernameError = document.getElementById('username-error');
    var passwordError = document.getElementById('password-error');

    // Limpa mensagens de erro anteriores
    usernameError.innerText = "";
    passwordError.innerText = "";

    if (username === '') {
        usernameError.innerText = "Por favor, insira seu e-mail.";
    }

    if (password === '') {
        passwordError.innerText = "Por favor, insira sua senha.";
    }

    if (password === '1234') {
        // Redireciona o usuário para outra página quando o login for bem-sucedido
        window.location.href = "home.html";
    } else {
        // Adiciona mensagem de erro geral
        var generalErrorMessage = document.createElement('p');
        generalErrorMessage.innerText = "Credenciais incorretas.";
        generalErrorMessage.style.color = 'red';
        document.getElementById('loginForm').appendChild(generalErrorMessage);
    }
}