const nome = 'luis';
// escopo lexico
function falaNome() {
    console.log(nome);
}
function usaFalaNome() {
    const nome = 'otavio'
    falaNome();
}

usaFalaNome();