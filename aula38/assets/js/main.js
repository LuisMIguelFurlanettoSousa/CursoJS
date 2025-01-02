const paragrafos = document.querySelector('.paragrafos');
const p = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundColor = estiloBody.backgroundColor;
const branco = "white";

console.log(backgroundColor);

for (let valor of p){
    valor.style.color = branco;
    valor.style.backgroundColor = backgroundColor;
}