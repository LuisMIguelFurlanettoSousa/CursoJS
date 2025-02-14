const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)

const geraMaiuscula = () => String.fromCharCode(rand(65, 91))
const geraMinusculas = () => String.fromCharCode(rand(97, 123))
const geraNumeros = () => String.fromCharCode(rand(48, 58))
const simbolos = ["!@#$%^&*()_-+=,.;:'?/|{}[]`~<>"]
const geraSimbolos = () => simbolos[0][rand(0, 30)]

export default function GeraSenha(qtd, maiuscula, minuscula, numero, simbolo) {
    const senhaGerada = []
    qtd = Number(qtd)

    for (let i = 0; i < qtd; i++) {
        maiuscula && senhaGerada.push(geraMaiuscula())
        minuscula && senhaGerada.push(geraMinusculas())
        numero && senhaGerada.push(geraNumeros())
        simbolo && senhaGerada.push(geraSimbolos())
    }

    return senhaGerada.join('').slice(0, qtd)
}

