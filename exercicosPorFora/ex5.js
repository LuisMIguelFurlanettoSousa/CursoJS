function criarPessoa(n, i, t = false){
    const objeto = {
        nome: n,
        idade: i,
        falar: function(){
            if (t == true){
            console.log(`oi, meu nome é ${n} e eu trabalho`);
        }
            else {
                console.log(`oi, meu nome é ${n} e eu nao trabalho`);
            }
        }
    }
    return objeto
};


let pessoa1 = criarPessoa('João', 28, true);
pessoa1.falar(); 
// Deve exibir: "Oi, meu nome é João e eu trabalho