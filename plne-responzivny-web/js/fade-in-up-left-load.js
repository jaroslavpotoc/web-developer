// Fade In Up - LOAD
const elements5 = document.querySelectorAll('.element5');

// Fade In Left - LOAD
const elements6 = document.querySelectorAll('.text, .text2, .headline-con, .con-look, .port-video, .con-look-ser');

// Fade In - LOAD
const elements7 = document.querySelectorAll('.element5');

// Zoom In - LOAD
const elements8 = document.querySelectorAll('.gallery-filter');

function animateOnLoad() {
    elements5.forEach(function (element, index) {
        setTimeout(function() {
            element.style.opacity = 1;
            element.classList.add('extract', 'animate__animated', 'animate__fadeInUp', 'fade-in-delay-');
        }, 200 * index); // Oneskorzenie 200 ms pre každý prvok
    });

    elements6.forEach(function (element, index) {
        setTimeout(function() {
            element.style.opacity = 1;
            element.classList.add('extract', 'animate__animated', 'animate__fadeInLeft', 'fade-in-delay-');
        }, 200 * index); // Oneskorzenie 200 ms pre každý prvok
    });

    elements7.forEach(function (element, index) {
        setTimeout(function() {
            element.style.opacity = 1;
            element.classList.add('extract', 'animate__animated', 'animate__fadeIn', 'fade-in-delay-');
        }, 200 * index); // Oneskorzenie 200 ms pre každý prvok
    });

    elements8.forEach(function (element, index) {
        setTimeout(function() {
            element.style.opacity = 1;
            element.classList.add('extract', 'animate__animated', 'animate__zoomIn', 'fade-in-delay-');
        }, 200 * index); // Oneskorzenie 200 ms pre každý prvok
    });

    window.removeEventListener('load', animateOnLoad);
}

window.addEventListener('load', animateOnLoad);
