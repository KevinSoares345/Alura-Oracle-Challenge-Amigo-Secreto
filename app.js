//variáveis
let listaDeNomes = [];
let lista = document.getElementById('listaAmigos');
let nomesInseridos = document.getElementById('amigo');
let resultado = document.getElementById('resultado');

// Função para checar se o campo está em branco ou nome repetido
function adicionarAmigo() {
    let amigos = nomesInseridos.value.trim();
    if (amigos == '') {
        alert('Digite o nome de algum amigo para o sorteio');
        return;
    }
    if (listaDeNomes.includes(amigos)) {
        alert('Este amigo ja foi adicionado');
        nomesInseridos.value = '';
        return;
    }  

    // Puxa o nome digitado para a lista
    listaDeNomes.push(amigos);
    atualizarLista();
    nomesInseridos.value = '';
}

// Função para adicionar os nomes na lista
function atualizarLista() {
    lista.innerHTML = '';

    listaDeNomes.forEach(amigo => {
     let itemLista = document.createElement('li');
     itemLista.textContent = amigo; // Define o nome do amigo
     lista.appendChild(itemLista); // Coloca o novo nome na tela
    });
}

// Função para interpretar o Enter como acionador do botão adicionar
nomesInseridos.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    }
});

function sortearAmigo() {
    if (listaDeNomes.length == 0) {
        alert('Adicione amigos para sortear!');
        return;
    }

    let nomeSorteado = Math.floor(Math.random() * listaDeNomes.length);
    resultado.innerHTML = `o amigo sorteado é: ${listaDeNomes[nomeSorteado]}`;

}

// Função de reiniciar sorteio
function sortearNovamente() {
    listaDeNomes = []; // Esvazia a lista de amigos
    lista.innerHTML = ""; // Limpa a lista exibida na tela
    resultado.innerHTML = ""; // Limpa o resultado do sorteio
    nomesInseridos.value = ""; // Limpa o campo de entrada
}