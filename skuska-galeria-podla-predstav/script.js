const filterContainer = document.querySelector(".gallery-filter"),
    galleryItems = document.querySelectorAll(".gallery-item"),
    modal = document.getElementById("galleryModal"),
    modalImage = document.getElementById("modalImage"),
    closeModalButton = document.querySelector(".close"),
    prevButton = document.querySelector(".prev"),
    nextButton = document.querySelector(".next");

let currentImageIndex = 0;
let filteredGalleryItems = [];

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")) {
        filterContainer.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        filteredGalleryItems = Array.from(galleryItems).filter(item =>
            item.classList.contains(filterValue) || filterValue === "all"
        );
        filterImages();
    }
});

function openModal(element) {
    modal.style.display = "block";
    modalImage.src = element.src;
    document.body.style.overflow = "hidden";
    currentImageIndex = filteredGalleryItems.findIndex(
        (item) => item.querySelector("img") === element
    );
}

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

function showImage(index) {
    const image = filteredGalleryItems[index].querySelector("img");
    modalImage.src = image.src;
}

function showPreviousImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = filteredGalleryItems.length - 1;
    }
    showImage(currentImageIndex);
}

function showNextImage() {
    currentImageIndex++;
    if (currentImageIndex >= filteredGalleryItems.length) {
        currentImageIndex = 0;
    }
    showImage(currentImageIndex);
}

closeModalButton.addEventListener("click", closeModal);
prevButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);

window.onclick = function (event) {
    if (event.target === modal) {
        closeModal();
    }
};

window.addEventListener("DOMContentLoaded", () => {
    const allFilter = filterContainer.querySelector('[data-filter="all"]');
    allFilter.classList.add("active");

    filteredGalleryItems = Array.from(galleryItems);
    filterImages();
});

function filterImages() {
    galleryItems.forEach((item) => {
        if (filteredGalleryItems.includes(item)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}



