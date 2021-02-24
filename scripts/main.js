document.querySelector('a').onclick = function() {
    alert('Coloque seu fone, pois a música vai começar!');
}

let minhaImagem = document.querySelector('img');

minhaImagem.onmouseover = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/hero-emicida.jpg') {
      minhaImagem.setAttribute ('src','imagens/hero-emicida-2.jpg');
    } else {
      minhaImagem.setAttribute ('src','imagens/hero-emicida.jpg');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'Você já escutou essa música, ' + meuNome + '?';
  }

  if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
  } else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Você já escutou essa música, ' + nomeGuardado + '?';
  }

  meuBotao.onclick = function() { defineNomeUsuario();
  }
  function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    if(!meuNome || meuNome === null) {
      defineNomeUsuario();
    } else {
      localStorage.setItem('nome', meuNome);
      meuCabecalho.innerHTML = 'Você já escutou essa música, ' + meuNome + '?';
    }
  }