let slideIndex = 0;

window.onload = function () {
    showSlide(slideIndex);
};

function modifySlide(change) {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    slideIndex += change;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    showSlide(slideIndex);

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

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    if (direction === 0) {
        dots[1].classList.add("active");
    } else if (direction < 0) {
        dots[0].classList.add("active");
    } else {
        dots[2].classList.add("active");
    }

}
