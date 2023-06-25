// Fade In Up - SCROLL
const elements1 = document.querySelectorAll('.new-gen, .come-on, .concept, .content1, .content2, .content-ser-1, .content-ser-2, .content-ser-3, .content-ser-4, .content-price-1, .content-price-2, .content-price-3, .content-price-4, .content-price-5, .content-price-6, .content-price-7, .content-price-8, .content-price-9, .who-container, .form-an');

// Fade In Left - SCROLL
const elements2 = document.querySelectorAll('.con-head, .proj-head, .skill-head, .con-look-ser-faq, .skill-text, .zak-text, .con-look-conta, .services-conta');

// Fade In - SCROLL
const elements3 = document.querySelectorAll('.photo-galery, .skill-img, .mind, .logo-foot, .content-ser-line');

// Zoom In - SCROLL
const elements4 = document.querySelectorAll('.gallery-item, .video-column, .menu-1, .menu-2, .menu-3, .menu-4, .menu-5, .container-about-col, .team-row, .photo-content, .contact, .form-zo');

// Nastavenie opacity na 0 pre všetky prvky
elements1.forEach(function (element) {
    element.style.opacity = 0;
});

elements2.forEach(function (element) {
    element.style.opacity = 0;
});

elements3.forEach(function (element) {
    element.style.opacity = 0;
});

elements4.forEach(function (element) {
    element.style.opacity = 0;
});

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Upravená podmienka na detekciu viditeľnosti prvku
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.top <= windowHeight
    );
}

function animateOnScroll() {
    elements1.forEach(function (element) {
        if (isElementInViewport(element) && !element.classList.contains('display')) {
            setTimeout(function() {
                element.style.opacity = 1;
                element.classList.add('display', 'animate__animated', 'animate__fadeInUp');
            }, 500); // Oneskorzenie 200 ms
        }
    });

    elements2.forEach(function (element) {
        if (isElementInViewport(element) && !element.classList.contains('display')) {
            setTimeout(function() {
                element.style.opacity = 1;
                element.classList.add('display', 'animate__animated', 'animate__fadeInLeft');
            }, 500); // Oneskorzenie 200 ms
        }
    });

    elements3.forEach(function (element) {
        if (isElementInViewport(element) && !element.classList.contains('display')) {
            setTimeout(function() {
                element.style.opacity = 1;
                element.classList.add('display', 'animate__animated', 'animate__fadeIn');
            }, 500); // Oneskorzenie 200 ms
        }
    });

    elements4.forEach(function (element) {
        if (isElementInViewport(element) && !element.classList.contains('display')) {
            setTimeout(function() {
                element.style.opacity = 1;
                element.classList.add('display', 'animate__animated', 'animate__zoomIn');
            }, 500); // Oneskorzenie 200 ms
        }
    });

    // Odstrániť event listener až po načítaní všetkých prvkov
    if (
        document.querySelectorAll('.display').length === elements1.length + elements2.length + elements3.length + elements4.length
    ) {
        window.removeEventListener('scroll', animateOnScroll);
    }
}

function startAnimation() {
    // Odstrániť event listener pre scrollovanie a spustiť animáciu
    window.removeEventListener('scroll', startAnimation);
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
}

window.addEventListener('load', startAnimation);