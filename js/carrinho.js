const precoPorGarrafa = 20;
const CODIGO_CUPOM_VALIDO = 'FIAP2024';
let qtdTotal = document.querySelector('#qtd-total');
let qtd = document.querySelector('#qtd');
let totalVinho = document.querySelector('#total');
let total = 0;
let desconto = 0;

function obterTotal() {
  return qtd.value * precoPorGarrafa;
}

function obterTotalComDesconto() {
  return obterTotal() - desconto;
}

function recalcular() {
  let preco = obterTotal();
  qtdTotal.innerHTML = preco.toFixed(2);
  if (desconto > 0) {
    // Atualiza o desconto sempre que a quantidade de items
    desconto = preco * 0.1;
  }

  atualizarTotal();
}

function finalizar() {
  let cupom = document.querySelector('#cupom').value;

  if (cupom === CODIGO_CUPOM_VALIDO) {
    desconto = obterTotal() * 0.1;
    atualizarTotal();
    alert('Cupom aplicado com sucesso!');
  } else if (cupom != '') {
    alert('Digite um cupom válido!');
  } else {
    alert('Nenhum desconto aplicado! Finalizando Compra!');
  }
}

function atualizarTotal() {
  let totalText = 'Total: R$ ' + obterTotalComDesconto().toFixed(2);
  if (desconto > 0) {
    totalText += ' (R$ ' + desconto.toFixed(2) + ' de desconto)';
  }

  totalVinho.innerHTML = totalText;
}

qtd.addEventListener('input', recalcular);
document.querySelector('#btn-checkout').addEventListener('click', finalizar);
