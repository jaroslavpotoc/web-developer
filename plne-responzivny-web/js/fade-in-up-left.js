const elements1 = document.querySelectorAll('.new-gen, .concept, .content1, .content2'); // Fade In Up
const elements2 = document.querySelectorAll('.text, .text2, .con-head, .proj-head, .skill-head, .port-foto'); // Fade In Left
const elements3 = document.querySelectorAll('.photo-galery, .skill-img, .overlay-content, .logo-foot'); //Fade In

elements1.forEach(function (element, index) {
    element.classList.add('fade-in-delay-' + index);
    element.style.opacity = 0;
});

elements2.forEach(function (element, index) {
    element.classList.add('fade-in-delay-' + index)
    element.style.opacity = 0;
});

elements3.forEach(function (element, index) {
    element.classList.add('fade-in-delay-' + index)
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

    // Odstrániť event listener až po načítaní všetkých prvkov
    if (
        document.querySelectorAll('.show').length === elements1.length + elements2.length + elements3.length
    ) {
        window.removeEventListener('scroll', animateOnScroll);
    }
}

window.addEventListener('load', function () {
    window.addEventListener('scroll', animateOnScroll);
});
