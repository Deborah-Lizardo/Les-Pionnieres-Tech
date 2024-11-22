
function increaseFont() {
    const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, a, li");
    elements.forEach(function(element) {
        const currentSize = parseFloat(window.getComputedStyle(element).fontSize);
        element.style.fontSize = (currentSize + 2) + "px";
    });
}

function decreaseFont() {
    const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, a, li");
    elements.forEach(function(element) {
        const currentSize = parseFloat(window.getComputedStyle(element).fontSize);
        if (currentSize > 10) {
            element.style.fontSize = (currentSize - 2) + "px";
        }
    });
}

// Função para aumentar o espaçamento entre linhas
function increaseLineSpacing() {
    const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, a, li"); // Seleciona todos os elementos de texto
    elements.forEach(function(element) {
        const currentLineHeight = parseFloat(window.getComputedStyle(element).lineHeight);
        element.style.lineHeight = (currentLineHeight + 1) + "px"; // Aumenta o espaçamento em 0.2em
    });
}


function decreaseLineSpacing() {
    const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, a, li");
    elements.forEach(function(element) {
        const currentLineHeight = parseFloat(window.getComputedStyle(element).lineHeight);
        if (currentLineHeight > 1.2) {
            element.style.lineHeight = (currentLineHeight - 1) + "px";
        }
    });
}
