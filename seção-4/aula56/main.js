// factory function
function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            console.log(nome, valor);
            this.sobrenome = valor.join();
        },

        peso,
        altura,

        fala() {
            return `${this.nome} esta falando oi`;
        },

        // getter

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}


const p1 = criaPessoa('Luis', 'Miguel', 82, 1.85);

p1.nomeCompleto = 'Luis Miguel Furlanetto Sousa'
console.log(p1.nome);
console.log(p1.sobrenome);