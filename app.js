//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const nomes = new Array();
const botaoAdd = document.querySelector('[data-botao-add]');
const botaoSortear = document.querySelector('[data-botao-sortear]');
const resultado = document.querySelector('[data-resultado]');

function adicionarAmigo(){
    const nome = document.querySelector('[data-nome]').value.trim();
    const lista = document.querySelector('[data-nomes-lista]');

    // Se for um nome válido, adiciona ao array nomes.
    validarEntrada(nome) ? nomes.push(nome) : alert('Digite um nome válido');

    const elementListItem = document.createElement('li'); // criar novo elemento <li></li>
    elementListItem.innerHTML += nome; // <li>nome</li>
    lista.appendChild(elementListItem); // Adiciona o nome na lista de amigos
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
botaoSortear.addEventListener('click', () => sortearAmigo());
