function ValidaCpf(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    }) 
}

ValidaCpf.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const primeiroDigito = this.criadigito(cpfParcial);
    const segundoDigito = this.criadigito(cpfParcial + primeiroDigito);

    const novoCpf = cpfParcial + primeiroDigito + segundoDigito;
    return this.cpfLimpo === novoCpf;
}

ValidaCpf.prototype.criadigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito)
}

ValidaCpf.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCpf('03932445635');

console.log(cpf.valida())
