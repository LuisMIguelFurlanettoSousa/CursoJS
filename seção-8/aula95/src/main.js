import './assets/css/style.css'
import geraCPF from './modules/geraCPF'

(function(){
    const gera = new geraCPF()
    const resultado = document.querySelector('.novo-cpf')
    resultado.innerHTML = gera.geraNovoCpf()
})()