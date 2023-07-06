const smallImages = document.querySelectorAll(".images a");
const popup = document.querySelector(".popup");
const bigImage = document.querySelector(".popup .image-container img");
const iconLeft = document.querySelector(".popup .image-container .icon-overlay .left-icon");
const iconRight = document.querySelector(".popup .image-container .icon-overlay .right-icon");
let currentImageIndex = 0;

function openBigImagePopup(imgPopup) {
    imgPopup.style.display = "flex";
}

function closeBigImagePopup(imgPopup) {
    imgPopup.style.display = "none";
}

function showImage(index) {
    const smallImageSrc = smallImages[index].getAttribute("href");
    bigImage.setAttribute("src", smallImageSrc);
}

function showPreviousImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = smallImages.length - 1;
    }
    showImage(currentImageIndex);
}

function showNextImage() {
    currentImageIndex++;
    if (currentImageIndex >= smallImages.length) {
        currentImageIndex = 0;
    }
    showImage(currentImageIndex);
}

smallImages.forEach((smallImage, index) => {
    smallImage.addEventListener("click", function (e) {
        e.preventDefault();
        currentImageIndex = index;
        openBigImagePopup(popup);
        showImage(currentImageIndex);
    });
});

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("popup")) {
        closeBigImagePopup(popup);
    }
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeBigImagePopup(popup);
    } else if (e.key === "ArrowLeft") {
        showPreviousImage();
    } else if (e.key === "ArrowRight") {
        showNextImage();
    }
});

iconLeft.addEventListener("click", showPreviousImage);
iconRight.addEventListener("click", showNextImage);

