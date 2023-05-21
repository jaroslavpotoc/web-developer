document.addEventListener('DOMContentLoaded', function() {
    var progressBarElements = document.querySelectorAll('.progress-bar');

    progressBarElements.forEach(function(progressBar) {
        var progressContent = progressBar.querySelector('.progress-content');
        var percentage = progressBar.getAttribute('data-percentage');

        animateProgress(progressContent, percentage);
        animateNumberMark(progressBar, percentage);
    });
});

function animateProgress(element, targetWidth) {
    var currentWidth = 0;
    var animationDuration = 2000;
    var animationStartTime = null;

    function animate(timestamp) {
        if (!animationStartTime) {
            animationStartTime = timestamp;
        }

        var progress = timestamp - animationStartTime;
        var progressRatio = Math.min(progress / animationDuration, 1);
        var width = targetWidth * progressRatio;

        element.style.width = width + '%';

        if (progress < animationDuration) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

function animateNumberMark(progressBar, targetPosition) {
    var numberMark = progressBar.querySelector('.progress-number-mark');
    var percentElement = numberMark.querySelector('.percent');
    var currentPosition = 0;
    var animationDuration = 2000;
    var animationStartTime = null;

    function animate(timestamp) {
        if (!animationStartTime) {
            animationStartTime = timestamp;
        }

        var progress = timestamp - animationStartTime;
        var progressRatio = Math.min(progress / animationDuration, 1);
        var position = targetPosition * progressRatio;

        numberMark.style.left = position + '%';
        percentElement.innerHTML = Math.round(position) + '%';

        if (progress < animationDuration) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}
