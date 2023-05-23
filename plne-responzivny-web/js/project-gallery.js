const gallery = document.getElementById("gallery");

let intervalId;

window.addEventListener("scroll", () => {
    const photoGallerySection = document.querySelector(".photo-galery");
    const rect = photoGallerySection.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        if (!intervalId) {
            intervalId = setInterval(() => {
                const currentScroll = gallery.scrollLeft;
                gallery.scrollTo(currentScroll + 2, 0);

                const galleryWidth = gallery.scrollWidth;

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

window.addEventListener("load", () => {
    const galleryWidth = gallery.scrollWidth;
    const modalEle = document.querySelector(".modal-port");
    const modalImage = document.querySelector(".modalImage");
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
