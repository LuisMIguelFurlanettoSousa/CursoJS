const botao_add = document.querySelector('.btn-add-tarefa');
const botao_rmv_all = document.querySelector('btn-rmv-all');
const lista_tarefas = document.querySelector('.tarefas');
const input_tarefa = document.querySelector('.input-nova-tarefa');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

input_tarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
        if (!input_tarefa.value) {
            input_tarefa.focus() 
            return; 
        }
        criaTarefa(input_tarefa.value);
        limpaInput();
    }
});

function limpaInput() {
    input_tarefa.value = '';
    input_tarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botao_apagar = document.createElement('button');
    botao_apagar.innerText = 'apagar';
    botao_apagar.setAttribute('class', 'apagar');
    li.appendChild(botao_apagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    lista_tarefas.appendChild(li);
    criaBotaoApagar(li);
    salvarTarefa();
}

botao_add.addEventListener('click', function(e){
    if (!input_tarefa.value) {
        input_tarefa.focus() 
        return; 
    }
    criaTarefa(input_tarefa.value);
    limpaInput();
});

document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('apagar')){
        el.parentElement.remove();
        input_tarefa.focus();
        salvarTarefa();
    }

    if (el.classList.contains('btn-rmv-all')) {
        lista_tarefas.innerHTML = '';
        input_tarefa.focus();
        salvarTarefa();
    }
});

function salvarTarefa() {
    const liTarefas = lista_tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();