const gallery = document.getElementById("gallery");

let intervalId; // Globálna premenná pre uchovanie ID intervalu

window.addEventListener("scroll", () => {
    const photoGallerySection = document.querySelector(".photo-galery");
    const rect = photoGallerySection.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        if (!intervalId) {
            intervalId = setInterval(() => {
                const currentScroll = gallery.scrollLeft;
                gallery.scrollTo(currentScroll + 2, 0);

                const galleryWidth = gallery.scrollWidth; // Aktualizovať šírku galérie pri každom posune

                if (currentScroll + 2 >= galleryWidth) {
                    gallery.scrollTo(0, 0);
                }
            }, 10);
        }
    } else {
        clearInterval(intervalId);
        intervalId = null;
    }
});

// Počkať na načítanie všetkých obrázkov v galérii
window.addEventListener("load", () => {
    const galleryWidth = gallery.scrollWidth; // Výpočet šírky galérie po načítaní všetkých obrázkov

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
});
