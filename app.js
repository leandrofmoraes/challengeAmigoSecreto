//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let names = new Array();
const addButton = document.querySelector('[data-button-add]');

function adicionarNome(){
    let name = document.querySelector('[data-name]').value;
    names.push(name);
    console.log(names);
}

addButton.addEventListener('click', () => adicionarNome());
