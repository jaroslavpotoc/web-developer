const gallery = document.getElementById("gallery")
let galleryWidth = gallery.scrollWidth

window.addEventListener("load", () => {
    self.setInterval(() => {
        gallery.scrollTo(gallery.scrollLeft+2, 0);

        // the number should be dynamic
        if (gallery.scrollLeft == 5450) {
            gallery.scrollTo(0,0)
        }
    }, 10);
})

var modalEle = document.querySelector(".modal");
var modalImage = document.querySelector(".modalImage");
Array.from(document.querySelectorAll(".pro-gal")).forEach(item => {
    item.addEventListener("click", event => {
        modalEle.style.display = "block";
        modalImage.src = event.target.src;
    });
});
document.querySelector(".close").addEventListener("click", () => {
    modalEle.style.display = "none";
});