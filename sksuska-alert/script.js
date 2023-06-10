function toastFunction() {
    const x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function submitForm(event) {
    event.preventDefault(); // Zrušiť predvolenú akciu odosielania formulára

    const form = document.getElementById("contact-form");
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.send(formData);

    toastFunction(); // Zobraziť toast po odoslaní formulára
}