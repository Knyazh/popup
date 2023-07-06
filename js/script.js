const smallImages = document.querySelectorAll(".images a");
const popup = document.querySelector(".popup");
const bigImage =document.querySelector(".popup .image-container img")

function openBigImagePopup(imgPopup){
    imgPopup.style.display="flex";
}
function closeBigImagePopup(imgPopup){
    imgPopup.style.display="none";
}

smallImages.forEach((smallImages) => {
    smallImages.addEventListener("click", function(e) {
        e.preventDefault();
        openBigImagePopup(popup);
        const smallImageSrc = this.getAttribute("href");
        bigImage.setAttribute("src", smallImageSrc);
    });

});

document.addEventListener("click", function(e) {
    // this.style.display="none";
    if(e.target.classList.contains("popup")){
        closeBigImagePopup(popup);
    }
});
