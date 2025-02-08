const nome = 'luis'
const sobrenome = 'furlanetto'
const idade = 17

export default function soma(x, y) {
    return x + y
}

export { nome, sobrenome, idade}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
}