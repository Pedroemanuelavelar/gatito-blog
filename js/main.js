// Atualiza o ano no footer
const ano = document.getElementById('ano');
const anoAtual = new Date();

ano.innerHTML = anoAtual.getFullYear();