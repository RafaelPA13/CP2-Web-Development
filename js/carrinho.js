const precoPorGarrafa = 20
let qtdTotal = document.querySelector('#qtd-total')
let qtd = document.querySelector('#qtd')
let totalVinho = document.querySelector('#total')
let total = 0

function recalcular() {
    let preco = qtd.value * precoPorGarrafa

    total += preco

    qtdTotal.innerHTML = preco.toFixed(2)
}

function finalizar() {
    let cupom = document.querySelector('#cupom').value

    if (cupom == 'FIAP2024') {
        total = total - (total * 0.1)
        alert("Cupom aplicado com sucesso!")
    } else if (cupom != '') {
        alert("Digite um cupom válido!")
        return;
    } else {
        alert("Nenhum desconto aplicado! Finalizando Compra!")
    }

    totalVinho.innerHTML = "Total: R$ " + total.toFixed(2)
}

qtd.addEventListener('input', recalcular);
document.querySelector('#btn-checkout').addEventListener('click', finalizar);