let slideIndex = 0;
window.onload = function(){
    showSlide(slideIndex);
}
function modifySlide(change){
    slideIndex+=change;
    showSlide(slideIndex);
}

function showSlide(index){
    let slides = document.getElementsByClassName("slides");
    if(slideIndex>slides.length-2) slideIndex = slides.length-2;
    if(slideIndex<1) slideIndex=1;
    for (let i = 0; i < slides.length; i++)
    {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}