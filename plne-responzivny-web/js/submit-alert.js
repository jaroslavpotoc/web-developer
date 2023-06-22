function toastFunction() {
    const x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function () {
        x.className = x.className.replace("show", "");
    }, 3000);
}