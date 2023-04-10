let slideIndex = 0;
let timer;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    timer = setTimeout(showSlides, 4000); // Change image every 3 seconds
}

function changeSlide(n) {
    clearTimeout(timer);
    if (n < 0) {
        showPrevSlide(slideIndex += n);
    } else {
        showNextSlide(slideIndex += n);
    }
}

function showPrevSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

function showNextSlide(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

showSlides();


//Modal on image click//

function openImageModal(imageElement) {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageElement.src;
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
  }
  