let currentIndex = 0;
const slides = document.querySelectorAll('.carrossel-images img');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;
const carrosselWrapper = document.querySelector('.carrossel-wrapper');
let slideInterval;


function showSlide(index) {{
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }


    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));


    slides[currentIndex].style.display = 'block';
    dots[currentIndex].classList.add('active');
    }
 
    carrosselWrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
    carrosselWrapper.style.transition = 'transform 0.5s ease-in-out'; 


    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
    }


function changeSlide(n) {
    showSlide(currentIndex + n);
    resetAutoSlide();  
}


function currentSlide(n) {
    showSlide(n - 1);
    resetAutoSlide();  
}


function startAutoSlide() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 3000);  
}


function resetAutoSlide() {
    clearInterval(slideInterval);  r
    startAutoSlide();  
}


showSlide(currentIndex);
startAutoSlide();
