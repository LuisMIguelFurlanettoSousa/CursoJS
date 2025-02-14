export default class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos) {
        let tot = 0;
        let val = cpfSemDigitos.length + 1;

        for(let numero of cpfSemDigitos) {
            tot += val * Number(numero)
            val--;
        }

        const digito = 11 - (tot % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    sequecia() {
        return this.cpfLimpo[0].repeat(11) === this.cpfLimpo
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.sequecia()) return false;
        this.geraNovoCpf();

        return this.novoCpf === this.cpfLimpo;
    }
}