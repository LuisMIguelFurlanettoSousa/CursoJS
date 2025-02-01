class verificaForm {
    constructor() {
        this.form = document.querySelector('.formulario');
        this.evento();
    }

    evento() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposValidos();
        const senhasValidas = this.senhasSaoValidas();

        if (camposValidos && senhasValidas) {
            alert('formulario enviado');
            this.form.submit();
        }
    }

    senhasSaoValidas() {
        let valid = true;

        const senha = this.form.querySelector('.senha');
        const repetirSenha = this.form.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value) {
            this.colocaErro(senha, 'As senhas não sao iguais')
            valid = false;
        } 
        return valid;
    }

    colocaErro(campo, erro) {
        const div = document.createElement('div');
        div.innerHTML = erro;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div)
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12) {
            this.colocaErro(campo, 'Usuário deverá ter entre 3 e 12 caracteres');
            valid = false;
        }
        if(!/^[a-zA-Z0-9]+$/.test(usuario)) {
            this.colocaErro(campo, 'Usuário só poderá conter letras e/ou números')
            valid = false;
        }

        return valid;
    }

    validaCpf(campo) {
        const cpf = new ValidaCPF(campo.value)

        if(!cpf.valida()) {
            this.colocaErro(campo, 'CPF invalido');
            return false;
        }
        return true;
    }

    camposValidos() {
        let valid = true;

        for(let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for(let campo of this.form.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;

            if(!campo.value) {
                this.colocaErro(campo, `Campo ${label} nao pode estao em branco`)
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCpf(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }
}

const form1 = new verificaForm();