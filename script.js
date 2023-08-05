const nextBtu = document.querySelector('.next-btu');   
const prevBtu = document.querySelector('.prev-btu');
const slides = document.querySelectorAll('.slide');
 const numberOfSlides = slides.length;
 let slideNumber = 0;


//slider next button
nextBtu.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
}

//slider prev button
prevBtu.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove(active);
    });
    slideNumber--;

    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add('active');
}