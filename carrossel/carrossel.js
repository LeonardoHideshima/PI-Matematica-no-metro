let currentIndex = 0;
const slides = document.querySelectorAll('.carrossel-images img');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;
const carrosselWrapper = document.querySelector('.carrossel-wrapper');
let slideInterval;

// Função para exibir o slide com animação de deslizar
function showSlide(index) {{
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    // Esconde todas as imagens
    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));

    // Exibe a imagem atual e ativa o ponto correspondente
    slides[currentIndex].style.display = 'block';
    dots[currentIndex].classList.add('active');
    }
    // Aplica a transformação de deslocamento (deslizar) no wrapper do carrossel
    carrosselWrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
    carrosselWrapper.style.transition = 'transform 0.5s ease-in-out'; // Animação suave

    // Atualiza as bolinhas (dots)
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
    }

// Função para alterar slide com as setas (anterior/próximo)
function changeSlide(n) {
    showSlide(currentIndex + n);
    resetAutoSlide();  // Reseta o intervalo ao clicar
}

// Função para selecionar slide pelas bolinhas
function currentSlide(n) {
    showSlide(n - 1);
    resetAutoSlide();  // Reseta o intervalo ao clicar nas bolinhas
}

// Função para iniciar o carrossel automaticamente com tempo de 3 segundos
function startAutoSlide() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 3000);  // Intervalo de 3 segundos
}

// Função para resetar o intervalo ao clicar nas setas ou bolinhas
function resetAutoSlide() {
    clearInterval(slideInterval);  // Limpa o intervalo anterior
    startAutoSlide();  // Reinicia o intervalo
}

// Inicializa o carrossel no primeiro slide
showSlide(currentIndex);
startAutoSlide();
