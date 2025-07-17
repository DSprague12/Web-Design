let slideIndex = 0;
let dotIndex = 0;

window.onload = function () {
    showSlide(slideIndex);
};

function modifySlide(change) {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    slideIndex += change;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    try{showSlide(slideIndex);}catch{}

    updateDots(change);
}

function showSlide(index) {
    let slides = document.getElementsByClassName("slides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slides[index].classList.add("active");
}

function updateDots(direction) {
    let dots = document.getElementsByClassName("dot");
    dotIndex += direction;
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    
    if (dotIndex == 0) {
        dots[1].classList.add("active");
    } else if (dotIndex < 0) {
        dots[0].classList.add("active");
        dotIndex = -1;
    } else {
        dots[2].classList.add("active");
        dotIndex = 1;
    }

}
