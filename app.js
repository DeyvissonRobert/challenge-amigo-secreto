const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const amigoInput = document.getElementById('amigo');
let amigos = [];

function adicionarAmigo() {
  const nomeAmigo = amigoInput.value.trim(); // Remove espaços em branco extras

  if (nomeAmigo === "") {
    alert("Por favor, digite um nome.");
    return;
  }

  if (amigos.includes(nomeAmigo)) {
    alert("Esse amigo já foi adicionado.");
    return;
  }
  
  amigos.push(nomeAmigo);
  atualizarListaAmigos();
  amigoInput.value = ""; // Limpa o input
}

function atualizarListaAmigos() {
  listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos para o sorteio.");
    return;
  }

  // Seleciona um amigo aleatoriamente
  const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

  resultado.innerHTML = ""; // Limpa resultados anteriores

  const li = document.createElement('li');
  li.textContent = `O amigo sorteado para receber o presente é: ${amigoSorteado}`;
  resultado.appendChild(li);
}

// Função para embaralhar arrays (Fisher-Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}