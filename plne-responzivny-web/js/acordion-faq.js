var acc = document.getElementsByClassName("accordion");
var panels = document.getElementsByClassName("panel");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        var isActive = panel.classList.contains("active");

        // Zatvorí všetky otvorené panely
        for (var j = 0; j < panels.length; j++) {
            panels[j].style.maxHeight = null;
            panels[j].classList.remove("active");
            acc[j].classList.remove("active");
        }

        // Ak panel nie je aktívny, otvorí ho a pridá triedy "active"
        if (!isActive) {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.classList.add("active");
            this.classList.add("active");
        }
    });

    // Aktivuje prvý panel pri načítaní stránky
    if (i === 0) {
        panels[i].style.maxHeight = panels[i].scrollHeight + "px";
        acc[i].classList.add("active");
        panels[i].classList.add("active");
    }
}
