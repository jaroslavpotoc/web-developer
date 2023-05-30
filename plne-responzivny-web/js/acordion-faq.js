var acc = document.getElementsByClassName("accordion");
var panels = document.getElementsByClassName("panel");
var lastPanelIndex = acc.length - 1; // Index posledného panelu
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        var panel = this.nextElementSibling;
        var isActive = panel.classList.contains("activefaq");

        // Zatvorí všetky otvorené panely
        for (var j = 0; j < panels.length; j++) {
            panels[j].style.maxHeight = null;
            panels[j].classList.remove("activefaq");
            acc[j].classList.remove("activefaq");
        }

        // Ak panel nie je aktívny, otvorí ho a pridá triedy "active"
        if (!isActive) {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.classList.add("activefaq");
            this.classList.add("activefaq");
        }
    });

    // Aktivuje posledný panel pri načítaní stránky
    if (i === lastPanelIndex) {
        panels[i].style.maxHeight = panels[i].scrollHeight + "px";
        acc[i].classList.add("activefaq");
        panels[i].classList.add("activefaq");
    }
}
