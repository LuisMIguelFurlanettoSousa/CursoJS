function verificaMatutino(acoes) {
    const matutino = {
        primeiro: ['acordar', 'tomar banho'],
        segundo: ['tomar banho', 'escovar dentes'],
        terceiro: ['tomar banho', 'tomar cafe da manha'],
        quarto: ['tomar banho', 'tomar cafe da manha']
    };

    // Verifica cada sequência de ações no objeto matutino
    for (const sequencia of Object.values(matutino)) {
        let index = 0;

        // Verifica se as ações estão na ordem correta
        for (const acao of acoes) {
            if (acao === sequencia[index]) {
                index++;
            }

            // Se todas as ações da sequência foram validadas, retorna true
            if (index === sequencia.length) {
                return true;
            }
        }
    }

    // Se nenhuma sequência foi validada, retorna false
    return false;
}

function rotinaCorreta(acao, sequencia, index) {
    // Verifica se a ação está na posição correta da sequência
    return sequencia[index] === acao;
}

// Testando a função
const acoes = ['acordar', 'escovar dentes', 'tomar cafe da manha', 'tomar banho'];
console.log(verificaMatutino(acoes)); // Saída: true

const acoesIncorretas = ['tomar banho', 'acordar', 'escovar dentes', 'tomar cafe da manha'];
console.log(verificaMatutino(acoesIncorretas)); // Saída: false