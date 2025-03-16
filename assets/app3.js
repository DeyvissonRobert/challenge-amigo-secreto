
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

  // Embaralha o array de amigos usando o algoritmo Fisher-Yates
  const shuffledAmigos = shuffleArray([...amigos]); // Cria uma cópia para não alterar o original

  resultado.innerHTML = ""; // Limpa resultados anteriores

  for (let i = 0; i < shuffledAmigos.length; i++) {
    const amigoAtual = shuffledAmigos[i];
    const amigoSorteado = shuffledAmigos[(i + 1) % shuffledAmigos.length]; // Roda a lista

    const li = document.createElement('li');
    li.textContent = `${amigoAtual} vai presentear ${amigoSorteado}`;
    resultado.appendChild(li);
  }
}

// Função para embaralhar arrays (Fisher-Yates)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}