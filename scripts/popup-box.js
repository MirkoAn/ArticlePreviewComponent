document.querySelector(".article-footer__share").addEventListener("click", popUpFunction);

function popUpFunction() {
    let popup = document.getElementById("popup-social");
    popup.classList.toggle("show");

    let clickedIcon = document.querySelector(".share-icon");
    clickedIcon.classList.toggle("clicked");
}
