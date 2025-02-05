document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
  
    if (tag === 'a') {
      e.preventDefault();
      carregaPagina(el);
    }
  });
  
async function carregaPagina(el) {
    try {
      const href = el.getAttribute('href');
      const response = await fetch(href);

      if(!response.ok) throw new Error('Meu Error 404 (NOT FOUND)');

      const html = await response.text();
      carregaResultado(html)
    }catch(e) {
      console.log(e)
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
