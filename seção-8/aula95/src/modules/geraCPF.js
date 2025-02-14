import ValidaCPF from './validaCPF'

export default class geraCPF {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.rand() * (max - min) + min))
    }

    geraNovoCpf() {
        const cpfSemDigito = this.rand()
        const digito1 = ValidaCPF.geraDigito(cpfSemDigito)
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1)
        const novoCpf = cpfSemDigito + digito1 + digito2
        return novoCpf
    }
}