const acc = document.getElementsByClassName("accordion");
const panels = document.getElementsByClassName("panel");
const lastPanelIndex = acc.length - 1;
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        const panel = this.nextElementSibling;
        const isActive = panel.classList.contains("activefaq");

        for (let j = 0; j < panels.length; j++) {
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
