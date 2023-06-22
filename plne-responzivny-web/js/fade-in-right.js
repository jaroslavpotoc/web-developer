function fadeInElements() {
    var elements = document.querySelectorAll('.fade-in-right');
    var windowHeight = window.innerHeight;

    elements.forEach(function(element, index) {
        var position = element.getBoundingClientRect().top;
        var isVisible = position - windowHeight < 0;

        if (isVisible) {
            setTimeout(function() {
                element.style.opacity = 1;
                element.style.transform = 'translateX(0)';
                element.classList.remove('fade-in-right');
            }, index * 500); // Časovanie postupného zobrazenia (500ms medzi každým prvkom)
        }
    });
}

window.addEventListener('scroll', fadeInElements);
window.addEventListener('resize', fadeInElements);
