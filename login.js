function showLoginForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var usernameError = document.getElementById('username-error');
    var passwordError = document.getElementById('password-error');

    if (username === '') {
        usernameError.innerText = "Por favor, insira seu e-mail.";
    } else {
        usernameError.innerText = "";
    }

    if (password === '') {
        passwordError.innerText = "Por favor, insira sua senha.";
    } else {
        passwordError.innerText = "";
    }

    if (password === '1234') {
        // Redireciona o usuário para outra página quando o login for bem-sucedido
        window.location.href = "base.html";
    } 
}