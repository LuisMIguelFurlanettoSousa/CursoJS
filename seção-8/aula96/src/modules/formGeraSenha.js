import GeraSenha from "./gerador";

const SenhaHtml = document.querySelector('.senha-gerada')
const qtd = document.querySelector('.qtd')
const letrasMaiusculas = document.querySelector('.chk-maiuculas')
const letrasMinusculas = document.querySelector('.chk-minusculas')
const numeros = document.querySelector('.chk-numeros')
const simbolos = document.querySelector('.chk-simbolos')
const botao = document.querySelector('.gerar')

//export default () => {
botao.addEventListener('click', () => {
    const senha = gera()
    SenhaHtml.innerHTML = senha
})
//}

function gera() {
    const senha = GeraSenha(
        qtd.value,
        letrasMaiusculas.checked,
        letrasMinusculas.checked,
        numeros.checked,
        simbolos.checked
    )
    return senha
}
