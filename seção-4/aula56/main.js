function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        fala: function() {
            return `${this.nome} esta falando`
        }
    };
}

const p1 = criaPessoa('Luis', 'Miguel');

console.log(p1.fala());