// Função para alternar contraste
function changeContrast() {
    document.body.classList.toggle('high-contrast');
}

// Função para aumentar o tamanho da fonte
function increaseFontSize() {
    let currentSize = window.getComputedStyle(document.body).fontSize;
    let newSize = parseFloat(currentSize) + 2;
    document.body.style.fontSize = newSize + 'px';
}

// Função para diminuir o tamanho da fonte
function decreaseFontSize() {
    let currentSize = window.getComputedStyle(document.body).fontSize;
    let newSize = parseFloat(currentSize) - 2;
    document.body.style.fontSize = newSize + 'px';
}

// Adiciona suporte a contraste alto
document.body.insertAdjacentHTML('beforeend', `
    <style>
        .high-contrast {
            background-color: #000;
            color: #fff;
        }
    </style>
`);
