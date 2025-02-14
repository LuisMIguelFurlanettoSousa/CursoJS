const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)


export default class {
    
    geraMaiuscula = () => String.fromCharCode(rand(65, 91))
    geraMinusculas = () => String.fromCharCode(rand(97, 123))
    geraNumeros = () => String.fromCharCode(rand(48, 58))
    simbolos = ["!@#$%^&*()_-+=,.;:'?/|{}[]`~<>"]
    geraSimbolos = () => simbolos[0][rand(0, 30)]

}

// console.log(geraMaiuscula())
// console.log(geraMinusculas())
// console.log(geraNumeros())
// console.log(geraSimbolos())
