// const display = document.querySelector('.display')
// const numeros = document.querySelector('.btn-num')

// document.addEventListener('click', function(e) {
//     const el = e.target;

//     if (el.classList.contains('btn-num')) {
//         colocaNoDisplay(el.innerText);
//     }

//     if (el.classList.contains('btn-clear')) {
//         limpaDisplay();
//     }

//     if (el.classList.contains('btn-del')) {
//         limpaUm();
//     }

//     if (el.classList.contains('btn-eq')) {
//         fazerCalculo();
//     }
// });

// function colocaNoDisplay(valor) {
//     display.value += valor;
//     display.focus();
// }

// function limpaDisplay() {
//     display.value = ''
//     display.focus();
// }

// function limpaUm() {
//     display.value = display.value.slice(0, -1);
//     display.focus();
// }

// function fazerCalculo() {
//     let conta = display.value;

//     try {
//     conta = eval(conta);

//     if(isNaN(conta)) {
//         alert('conta invalida');
//         display.value = ''
//         return;
//     }

//     display.value = conta;
//     } catch(e) {
//         alert('conta invalida');
//         display.value = ''
//         return;
//     }
//     display.focus();
// }

// display.addEventListener('keyup', function(e) {
//     if (e.key === 'Enter' || e.keyCode === 13) {
//         fazerCalculo();
//     }
// });

// display.focus()

function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.display.focus();
        this.clicabotoes();
        this.clicaBackEspace();
        this.clicaEnter();
    }

    this.clicabotoes = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
    
            if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
            if (el.classList.contains('btn-eq')) this.realizaConta(this.display.value);
            if (el.classList.contains('btn-clear')) this.limpaDisplay();
            if (el.classList.contains('btn-del')) this.limpaUm();
        });
    };

    this.clicaBackEspace = () => {
        document.addEventListener('keypress', (e) => {
            if (e.key === 'Backspace') {
                this.limpaUm();
            }
        });
    }

    this.clicaEnter = () => {
        document.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                this.realizaConta(this.display.value);
            }
        })
    }

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
        this.display.focus();
    }

    this.realizaConta = (conta) => {
        try {
            const resultado = eval(conta);

            if (!conta) {
                alert('conta invalida');
                return;
            }

            this.display.value = resultado;
            this.display.focus();
        } catch (e) {
            alert('conta invalida');
            this.display.value = ''
            this.display.focus();
            return;
        }
    }
    this.limpaDisplay = () => {
        this.display.value = '';
        this.display.focus();
    }

    this.limpaUm = () => {
        this.display.value = this.display.value.slice(0, -1);
        this.display.focus();
    }
}

const calculadora = new Calculadora();

calculadora.inicia();