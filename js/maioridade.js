document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("verificaridade").addEventListener("click", function() {
        var idade = document.getElementById("idadeInput").value;

        if (idade > 18) {
            alert("Você é maior de 18 anos. Acesso permitido!");
        } else {
            alert("Você é menor de 18 anos. Acesso não permitido.");
            window.location.href = "https://duckduckgo.com";
        }
    });

    // Adicionando a função para redirecionar ao clicar no botão
    document.getElementById("redirecionar").addEventListener("click", function() {
        window.location.href = "https://duckduckgo.com";
    });

});

