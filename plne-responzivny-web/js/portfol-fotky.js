const filterContainer = document.querySelector(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");
const modal = document.getElementById("galleryModal-port");
const modalImage = document.getElementById("modalImage-port");
const closeModalButton = document.querySelector(".close-port-fot");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const photoCountElement = document.getElementById("photoCount");

let currentImageIndex = 1;
let filteredGalleryItems = [];
const photoCount = galleryItems.length; // Počet fotiek v galérii

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")) {
        filterContainer.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        filteredGalleryItems = Array.from(galleryItems).filter(
            (item) => item.classList.contains(filterValue) || filterValue === "all"
        );
        filterImages();
        updatePhotoCount(); // Aktualizácia počtu fotiek pri zmene filtra
    }
});

function openModal(element) {
    modal.style.display = "block";
    modalImage.src = element.src;
    document.body.style.overflow = "hidden";
    currentImageIndex = Array.from(filteredGalleryItems).findIndex(
        (item) => item.querySelector("img") === element.parentNode
    ) + 1;
    updatePhotoCount();
}

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

function showImage(index) {
    const image = filteredGalleryItems[index].querySelector("img");
    modalImage.src = image.src;
    currentImageIndex = index + 1;
    updatePhotoCount();
}

function showPreviousImage() {
    currentImageIndex--;
    if (currentImageIndex < 1) {
        currentImageIndex = filteredGalleryItems.length;
    }
    showImage(currentImageIndex - 1);
}

function showNextImage() {
    currentImageIndex++;
    if (currentImageIndex > filteredGalleryItems.length) {
        currentImageIndex = 1;
    }
    showImage(currentImageIndex - 1);
}

function updatePhotoCount() {
    const filteredPhotoCount = filteredGalleryItems.length;
    const photoCountText = `${currentImageIndex}/${filteredPhotoCount}`;
    photoCountElement.textContent = photoCountText;

    const closeButton = document.querySelector(".close-port-fot");
    if (closeButton) {
        closeButton.style.left = `calc(100% + 10px)`;
    }
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
    updatePhotoCount(); // Zavoláme funkciu na aktualizáciu počtu fotiek
});

function filterImages() {
    galleryItems.forEach((item, index) => {
        if (filteredGalleryItems.includes(item)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
        item.dataset.index = index + 1; // Nastavenie dataset atribútu pre index fotky
    });
}
