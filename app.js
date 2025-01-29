/**
 * Amigo Secreto
 *
 * Autor: Leandro F. Moraes
 * GitHub: https://github.com/leandrofmoraes
 * Data: 25-01-2025
 *
 * Descrição:
 * Recebe nomes via HTML e adiciona a uma lista.
 * Sorteia um nome na lista e exibe o mesmo via HTML.
 *
 * Funções principais:
 * - adicionarAmigo(): Adiciona um nome válido à lista e ao conjunto.
 * - validarEntrada(): Valida o nome para garantir que não é vazio ou numérico.
 * - sortearAmigo(): Sorteia um nome da lista de amigos.
 *
 * Tecnologias: JavaScript, HTML, CSS
 */

// Variáveis globais
const amigos = new Set();

const botaoAdd = document.querySelector('[data-botao-add]');
const botaoSortear = document.querySelector('[data-botao-sortear]');
const lista = document.querySelector('[data-nomes-lista]');
const resultado = document.querySelector('[data-resultado]');

alternarBotaoSortear();

function adicionarAmigo(){
    const campoNome = document.querySelector('[data-nome]');

    resultado.innerHTML = ''; // Limpa o resultado anterior

    // Pegar o valor do campo de texto e remove espaços em branco
    const nome = campoNome.value.trim();

    if(!validarEntrada(nome)){
        alert('Digite um nome válido');
        return;
    }

    amigos.add(nome);

    atualizarLista();
    alternarBotaoSortear();
    campoNome.value = ''; // Limpa o campo de texto
}

function exibirResultado(){

    const elementListItem = document.createElement('li');
    elementListItem.innerHTML += `Amigo sorteado: ${sortearAmigo()}`;

    lista.innerHTML = ''; // Limpa a lista de amigos
    amigos.clear(); // Limpa o Set de amigos

    resultado.appendChild(elementListItem);
}

function sortearAmigo(){
    const amigosArray = Array.from(amigos); // Converte o Set para Array

    //sortear um número entre 0 e o tamanho do array de amigos
    const indice = Math.floor(Math.random() * amigos.size);

    return amigosArray[indice];
}

function validarEntrada(entrada){

    //Não é vazio ou não é um número
    return entrada.length > 0 || isNaN(entrada);
}

function atualizarLista(){
    lista.innerHTML = ''; // Limpa a lista de amigos

    //Percorre o Set de amigos e adiciona cada nome ao Html
    amigos.forEach((amigo) => {;
        const elementListItem = document.createElement('li'); // criar novo elemento <li></li>
        elementListItem.innerHTML += amigo; // <li>nome</li>
        lista.appendChild(elementListItem); // Adiciona o nome na lista de amigos
    });
}

// Alterna a aparência do botão sortear
function alternarBotaoSortear(){

    const ativo = amigos.size > 1 // Há mais de um nome na lista?

    botaoSortear.disabled = !ativo;
    botaoSortear.style.backgroundColor = ativo ? "" : "#C4C4C4";
    botaoSortear.style.color           = ativo ? "" : "#444444";
    botaoSortear.style.cursor          = ativo ? "" : "default";
}

botaoAdd.addEventListener('click', () => adicionarAmigo());
botaoSortear.addEventListener('click', () => exibirResultado());
