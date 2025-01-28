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

const nomes = new Set();

const botaoAdd = document.querySelector('[data-botao-add]');
const botaoSortear = document.querySelector('[data-botao-sortear]');

function adicionarAmigo(){
    const campoNome = document.querySelector('[data-nome]');
    const lista = document.querySelector('[data-nomes-lista]');

    // Pegar o valor do campo de texto e remover espaços em branco
    const nome = campoNome.value.trim();

    // Se for um nome válido, adiciona ao array nomes.
    // validarEntrada(nome) ? nomes.add(nome) : alert(mensagem);
    nomes.add(nome);

    const elementListItem = document.createElement('li'); // criar novo elemento <li></li>
    elementListItem.innerHTML += nome; // <li>nome</li>
    lista.appendChild(elementListItem); // Adiciona o nome na lista de amigos

    campoNome.value = ''; // Limpa o campo de texto
}

function exibirResultado(){
    const resultado = document.querySelector('[data-resultado]');

    const elementListItem = document.createElement('li');
    elementListItem.innerHTML += `Amigo sorteado: ${sortearAmigo()}`;

    resultado.appendChild(elementListItem);
}

function sortearAmigo(){
    const nomesArray = Array.from(nomes); // Converte o Set para Array

    //sortear um número entre 0 e o tamanho do array de nomes
    const indice = Math.floor(Math.random() * nomes.length);

    return nomesArray[indice];
}

function validarEntrada(nome){

    //Não é vazio ou não é um número
    if(nome.length > 0 || isNaN(nome)){
        alert('Digite um nome válido');
        return;
    }

    if(nomes.has(nome)) {
        alert(`O nome ${nome} já foi adicionado.`);
        return;
    }

    return true;
}

botaoAdd.addEventListener('click', () => adicionarAmigo());
botaoSortear.addEventListener('click', () => exibirResultado());
