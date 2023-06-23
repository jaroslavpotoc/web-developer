const elements1 = document.querySelectorAll('.new-gen, .concept, .content1, .content2, .content-ser-1, .content-ser-2, .content-ser-3, .content-ser-4, .content-price-1, .content-price-2, .content-price-3, .content-price-4, .content-price-5, .content-price-6, .content-price-7, .content-price-8, .content-price-9, .who-container, .form-an'); // Fade In Up
const elements2 = document.querySelectorAll('.text, .text2, .con-head, .proj-head, .skill-head, .port-foto, .port-video, .headline-con, .con-look-ser, .con-look-ser-faq, .skill-text, .zak-text, .con-look-conta, .services-conta'); // Fade In Left
const elements3 = document.querySelectorAll('.photo-galery, .skill-img, .overlay-content, .logo-foot, .content-ser-line'); //Fade In
const elements4 = document.querySelectorAll('.gallery-item, .video-column, .menu-1, .menu-2, .menu-3, .menu-4, .menu-5, .container-about-col, .team-row, .photo-content, .contact, .form-zo'); // Zoom In

elements1.forEach(function (element, index) {
    element.classList.add('fade-in-delay-' + index);
    element.style.opacity = 0;
});

elements2.forEach(function (element, index) {
    element.classList.add('fade-in-delay-' + index);
    element.style.opacity = 0;
});

elements3.forEach(function (element, index) {
    element.classList.add('fade-in-delay-' + index);
    element.style.opacity = 0;
});

elements4.forEach(function (element, index) {
    element.classList.add('fade-in-delay-' + index);
    element.style.opacity = 0;
});

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= windowHeight
    );
}

function animateOnScroll() {
    elements1.forEach(function (element) {
        if (isElementInViewport(element) && !element.classList.contains('show')) {
            element.style.opacity = 1;
            element.classList.add('show', 'animate__animated', 'animate__fadeInUp');
        }
    });

    elements2.forEach(function (element) {
        if (isElementInViewport(element) && !element.classList.contains('show')) {
            element.style.opacity = 1;
            element.classList.add('show', 'animate__animated', 'animate__fadeInLeft');
        }
    });

    elements3.forEach(function (element) {
        if (isElementInViewport(element) && !element.classList.contains('show')) {
            element.style.opacity = 1;
            element.classList.add('show', 'animate__animated', 'animate__fadeIn');
        }
    });

    elements4.forEach(function (element) {
        if (isElementInViewport(element) && !element.classList.contains('show')) {
            element.style.opacity = 1;
            element.classList.add('show', 'animate__animated', 'animate__zoomIn');
        }
    });

    // Odstrániť event listener až po načítaní všetkých prvkov
    if (
        document.querySelectorAll('.show').length === elements1.length + elements2.length + elements3.length + elements4.length
    ) {
        window.removeEventListener('scroll', animateOnScroll);
    }
}

window.addEventListener('load', function () {
    window.addEventListener('scroll', animateOnScroll);
});
