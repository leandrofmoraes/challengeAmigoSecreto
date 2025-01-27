const nomes = new Array();
const botaoAdd = document.querySelector('[data-botao-add]');
const botaoSortear = document.querySelector('[data-botao-sortear]');

function adicionarAmigo(){
    const campoNome = document.querySelector('[data-nome]');
    const lista = document.querySelector('[data-nomes-lista]');

    // Pegar o valor do campo de texto e remover espaços em branco
    const nome = campoNome.value.trim();

    // Se for um nome válido, adiciona ao array nomes.
    validarEntrada(nome) ? nomes.push(nome) : alert('Digite um nome válido');

    const elementListItem = document.createElement('li'); // criar novo elemento <li></li>
    elementListItem.innerHTML += nome; // <li>nome</li>
    lista.appendChild(elementListItem); // Adiciona o nome na lista de amigos

    campoNome.value = ''; // Limpa o campo de texto
}

function exibirResultado(){
    const resultado = document.querySelector('[data-resultado]');

    const elementListItem = document.createElement('li');
    elementListItem.innerHTML += `Amigo sorteado: ${nomes[sortearAmigo()]}`;

    resultado.appendChild(elementListItem);
}

function sortearAmigo(){
    return parseInt(Math.random() * nomes.length);
}

function validarEntrada(entrada){
    //Valida se a entrada é vazia ou se é um número
    if(entrada.length === 0 || !isNaN(entrada)){
        return false;
    }
    return true;
}

botaoAdd.addEventListener('click', () => adicionarAmigo());
botaoSortear.addEventListener('click', () => exibirResultado());
