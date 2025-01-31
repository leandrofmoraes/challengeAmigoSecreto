/**
 * Amigo Secreto
 *
 * Autor: Leandro F. Moraes
 * GitHub: https://github.com/leandrofmoraes
 * Data: 30-01-2025
 *
 * Descrição:
 * Cria um toggle para ativar o modo de sorteio.
 *
 */

function criarToggleSorteio() {
    const toggleContainer = document.createElement("div");
    toggleContainer.classList.add("toggle-container");

    const switchLabel = document.createElement("label");
    switchLabel.classList.add("switch");

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "modoSorteio";

    const sliderSpan = document.createElement("span");
    sliderSpan.classList.add("slider", "round");

    const textoModoSorteio = document.createElement("span");
    textoModoSorteio.id = "modoSorteioTexto";
    textoModoSorteio.textContent = "Sortear um amigo";

    switchLabel.appendChild(inputCheckbox);
    switchLabel.appendChild(sliderSpan);
    toggleContainer.appendChild(switchLabel);
    toggleContainer.appendChild(textoModoSorteio);

    document.querySelector(".input-section").insertBefore(toggleContainer, document.querySelector(".button-container"));
}

export default criarToggleSorteio;
