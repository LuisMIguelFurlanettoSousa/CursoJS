function relogio () {
    function criaHoraDosSegundos(s){
        const data = new Date(s * 1000);
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    const relogio = document.querySelector(".relogio");

    let segundos = 0;
    let time;

    function criaRelogio() {
        time = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    document.addEventListener('click', function(e){
        const el = e.target

        if (el.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            if (!time) { // Se 'time' for null, undefined ou 0
                criaRelogio(); // Cria o intervalo para atualizar o relógio
            }
        }

        if (el.classList.contains('pausar')) {
            clearInterval(time);
            time = null; // Garante que o intervalo não seja recriado sem clicar em "iniciar"
            relogio.classList.add('pausado');
        }

        if (el.classList.contains('zerar')) {
            clearInterval(time);
            time = null;
            segundos = 0;
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado');
        }
        })
    };

relogio()