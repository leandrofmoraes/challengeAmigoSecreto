/**
 * Amigo Secreto
 *
 * Autor: Leandro F. Moraes
 * GitHub: https://github.com/leandrofmoraes
 * Data: 31-01-2025
 * Versão: 1.1
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

import criarToggleSorteio from "./toggle.js";
criarToggleSorteio();

// Variáveis globais
const amigos = new Set();

const botaoAdd = document.querySelector('[data-botao-add]');
const botaoSortear = document.querySelector('[data-botao-sortear]');
const lista = document.querySelector('[data-nomes-lista]');
const resultado = document.querySelector('[data-resultado]');
const inputCheckbox = document.querySelector('#modoSorteio');

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

    const resultadoSorteio = inputCheckbox.checked ? sortearAmigos() : [sortearAmigo()];

    resultadoSorteio.forEach(par => {
        const elementListItem = document.createElement('li');
        elementListItem.textContent = inputCheckbox.checked ? `${par[0]} sorteou ${par[1]}`: `Amigo sorteado: ${par}`;
        resultado.appendChild(elementListItem);
    });

    amigos.clear(); // Limpa o Set de amigos
    atualizarLista();
    alternarBotaoSortear();
}

function sortearAmigo(){
    const amigosArray = Array.from(amigos); // Converte o Set para Array

    //sortear um número entre 0 e o tamanho do array de amigos
    const indice = Math.floor(Math.random() * amigos.size);

    return amigosArray[indice];
}

function sortearAmigos(){

    if(amigos.size % 2 !== 0){
        alert('O número de amigos deve ser par');
        return;
    }

    const sorteio = new Array();
    const amigosArray = Array.from(amigos); // Converte o Set para Array
    let embaralhado;

    //enquanto houver algum amigo na mesma posição do array embaralhado...
    do{
        embaralhado = [...amigosArray];

        // Embaralha o array de amigos com o algoritmo de Fisher-Yates
        for(let i = amigosArray.length -1; i > 0; i--){
            const j = Math.floor(Math.random() * (i+1));
            [amigosArray[i], amigosArray[j]] = [amigosArray[j], amigosArray[i]]; // Troca os elementos de posição
        }
    }while(embaralhado.some((amigo, i ) => amigo === amigosArray[i])); //enquanto houver algum amigo na mesma posição do array embaralhado...

    amigosArray.forEach((amigo, i) => sorteio.push([amigo, embaralhado[i]]));

    return sorteio;
}

//Não é vazio ou não é um número
function validarEntrada(entrada){
    return entrada.length > 2 && isNaN(entrada);
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

function alterarModoSorteio(){
    const modoSorteioTexto = document.querySelector('#modoSorteioTexto');
    const checkBox = inputCheckbox.checked;

    const textoBotãoSortear = checkBox ? "Sortear Amigos" : "Sortear Amigo";
    modoSorteioTexto.textContent = checkBox ? 'Sortear pares' : 'Sortear um amigo';

    botaoSortear.innerHTML = `<img src="assets/play_circle_outline.png" alt="Ícone para sortear"> ${textoBotãoSortear}`
};


inputCheckbox.addEventListener('change', () => alterarModoSorteio());
botaoAdd.addEventListener('click', () => adicionarAmigo());
botaoSortear.addEventListener('click', () => exibirResultado());
