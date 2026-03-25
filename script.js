document.querySelectorAll('a[href^="#"]').forEach(anchor => { // Seleciona todos os links que começam com "#"
  anchor.addEventListener("click", function(e) { // Adiciona um evento de clique a cada link
    e.preventDefault(); // Impede o comportamento padrão do link

    const target = document.querySelector(this.getAttribute("href")); // Seleciona o elemento de destino com base no atributo "href" do link

    window.scrollTo({ // Rola suavemente para a posição do elemento de destino
      top: target.offsetTop,
      behavior: "smooth"
    });
  });
});

if (window.location.hash) { // Verifica se há um hash na URL
  window.scrollTo(0, 0); // Rola para o topo da página
}

const elementos = document.querySelectorAll('.animar');

function animarScroll() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const posicao = el.getBoundingClientRect().top;

    if (posicao < alturaTela - 100) {
      el.classList.add('ativo');
    }
  });
}

window.addEventListener('scroll', animarScroll);

const textos = ["Hi, i'm Aurick Dutra!", "I'm a Software Engineering student.", "Welcome to my portfolio!"];
let indexTexto = 0;
let indexLetra = 0;
let escrevendo = true;

function escrever() {
  const elemento = document.getElementById("texto");

  if (escrevendo) {
    elemento.textContent = textos[indexTexto].substring(0, indexLetra + 1);
    indexLetra++;

    if (indexLetra === textos[indexTexto].length) {
      escrevendo = false;
      setTimeout(escrever, 1500); 
      return;
    }
  } else {
    elemento.textContent = textos[indexTexto].substring(0, indexLetra - 1);
    indexLetra--;

    if (indexLetra === 0) {
      escrevendo = true;
      indexTexto = (indexTexto + 1) % textos.length;
    }
  }

  setTimeout(escrever, escrevendo ? 100 : 50);
}

escrever();