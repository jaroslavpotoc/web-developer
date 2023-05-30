var acc = document.getElementsByClassName("accordion");
var panels = document.getElementsByClassName("panel");
var lastPanelIndex = acc.length - 1;
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        var panel = this.nextElementSibling;
        var isActive = panel.classList.contains("activefaq");

        for (var j = 0; j < panels.length; j++) {
            panels[j].style.maxHeight = null;
            panels[j].classList.remove("activefaq");
            acc[j].classList.remove("activefaq");
        }

        if (!isActive) {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.classList.add("activefaq");
            this.classList.add("activefaq");
        }
    });

    if (i === lastPanelIndex) {
        panels[i].style.maxHeight = panels[i].scrollHeight + "px";
        acc[i].classList.add("activefaq");
        panels[i].classList.add("activefaq");
    }
}
