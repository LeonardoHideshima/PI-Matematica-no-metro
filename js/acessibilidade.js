daltonismoSelect.addEventListener('change', function() {
    // Remove todas as classes de daltonismo
    document.body.classList.remove('protanopia', 'deuteranopia', 'tritanopia');
    
    // Adiciona a classe correspondente com base na opção selecionada
    const selectedValue = daltonismoSelect.value;
    if (selectedValue) {
        document.body.classList.add(selectedValue);
    }
});