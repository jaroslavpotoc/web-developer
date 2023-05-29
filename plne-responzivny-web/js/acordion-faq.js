var acc = document.getElementsByClassName("accordion");
var panels = document.getElementsByClassName("panel");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        var isActive = panel.classList.contains("active");

        // Zatvorí všetky otvorené panely okrem vybraného
        for (var j = 0; j < panels.length; j++) {
            if (panels[j] !== panel) {
                panels[j].style.maxHeight = null;
                panels[j].classList.remove("active");
            }
        }

        // Otvorí alebo zatvorí vybraný panel s animáciou
        if (isActive) {
            panel.style.maxHeight = null;
            panel.classList.remove("active");
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.classList.add("active");
        }
    });
}

// Otvorí panel 3 pri načítaní stránky
if (panels.length > 0) {
    panels[2].style.maxHeight = panels[2].scrollHeight + "px";
    panels[2].classList.add("active");
}
