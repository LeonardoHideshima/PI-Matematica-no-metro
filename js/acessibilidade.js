document.getElementById('tema').addEventListener('change', function () {
    const selectedTheme = this.value;
    document.body.style.filter = ''; // Remove qualquer filtro anterior

    if (selectedTheme !== 'normal') {
        document.body.style.filter = `url(#${selectedTheme})`; // Aplica o filtro SVG selecionado
    }
});

const daltonismoButton = document.getElementById('daltonismo-button');
daltonismoButton.addEventListener('click', () => {
    // Alternar classes de daltonismo conforme necessário
    const currentClass = document.body.classList.contains('protanopia') ? 'protanopia' : document.body.classList.contains('deuteranopia') ? 'deuteranopia' : document.body.classList.contains('tritanopia') ? 'tritanopia' : '';
    document.body.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    
    if (!currentClass) {
        document.body.classList.add('protanopia'); // Alterna para protanopia, por exemplo
    } else {
        document.body.classList.remove(currentClass); // Remove a classe atual
    }
});