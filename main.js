// Nota: Selecciona todas las div's de slide
const slides = document.querySelectorAll('.slide');

// Nota: Selección de botons para siguiente o anterior imagen
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

// Nota: En caso de que se requiera usar scroll automático
const auto = true;
const intervalTime = 5000;

let slideInterval;

const nextSlide = () => {
    // Nota: Selecciona el slide con class current
    const current = document.querySelector('.current');
    // Nota: Elimina class current
    current.classList.remove('current');

    // Nota: Check for next slide
    if (current.nextElementSibling) {
        // Nota: Add current class to next sibling
        current.nextElementSibling.classList.add('current');
    } else{
        // Nota: Add current to start
        slides[0].classList.add('current');
    }

    setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
    // Nota: Selecciona el slide con class current
    const current = document.querySelector('.current');
    // Nota: Elimina class current
    current.classList.remove('current');

    // Nota: Check for next slide
    if (current.previousElementSibling) {
        // Nota: Add current class to prev sibling
        current.previousElementSibling.classList.add('current');
    } else{
        // Nota: Add current to last
        slides[slides.length - 1].classList.add('current');
    }

    // Nota: la arrow function se ejecutará de manera inmediata
            // ya que no se especifica tiempo DelayNode, para setTimeout
    setTimeout(() => current.classList.remove('current'));
};


// Button events
next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto slide
if(auto){
    //Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}