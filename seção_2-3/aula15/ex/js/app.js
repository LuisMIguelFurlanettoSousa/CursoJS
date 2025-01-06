const numero = Number(prompt('Insira um numero abaixo!').replace(",", "."));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = ' ';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é intero: ${Number.isInteger(numero)}</p>`;
texto.innerHTML +=  `<p>É NaN : ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Duas casa decimais: ${numero.toFixed(2)}</p>`;
