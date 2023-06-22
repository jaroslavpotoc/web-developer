document.addEventListener('DOMContentLoaded', function () {
    const progressBarElements = document.querySelectorAll('.progress-bar');
    let animationStarted = false;

    function startAnimation() {
        if (animationStarted) {
            return;
        }

        progressBarElements.forEach(function (progressBar) {
            const progressContent = progressBar.querySelector('.progress-content');
            const percentage = progressBar.getAttribute('data-percentage');

            animateProgress(progressContent, percentage);
            animateNumberMark(progressBar, percentage);
        });

        animationStarted = true;
    }

    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkScroll() {
        progressBarElements.forEach(function (progressBar) {
            if (isElementInViewport(progressBar)) {
                startAnimation();
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});

function animateProgress(element, targetWidth) {
    const currentWidth = 0;
    const animationDuration = 2000;
    let animationStartTime = null;

    function animate(timestamp) {
        if (!animationStartTime) {
            animationStartTime = timestamp;
        }

        const progress = timestamp - animationStartTime;
        const progressRatio = Math.min(progress / animationDuration, 1);
        const width = targetWidth * progressRatio;

        element.style.width = width + '%';

        if (progress < animationDuration) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

function animateNumberMark(progressBar, targetPosition) {
    const numberMark = progressBar.querySelector('.progress-number-mark');
    const percentElement = numberMark.querySelector('.percent');
    const currentPosition = 0;
    const animationDuration = 2000;
    let animationStartTime = null;

    function animate(timestamp) {
        if (!animationStartTime) {
            animationStartTime = timestamp;
        }

        const progress = timestamp - animationStartTime;
        const progressRatio = Math.min(progress / animationDuration, 1);
        const position = targetPosition * progressRatio;

        numberMark.style.left = position + '%';
        percentElement.innerHTML = Math.round(position) + '%';

        if (progress < animationDuration) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}
