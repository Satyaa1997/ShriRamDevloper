// =========================
// Mobile Menu
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// =========================
// Preloader
// =========================

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";

    }, 1000); // 2000ms = 2 seconds

});
/*=========================
        HERO SLIDER
=========================*/
/*=====================================
        HERO SLIDER
======================================*/

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;
let autoSlide;

/* Show Slide */

function showSlide(index){

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    dots.forEach((dot)=>{
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

}

/* Next Slide */

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

/* Previous Slide */

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);

}

/* Auto Slider */

function startSlider(){

    autoSlide = setInterval(nextSlide,5000);

}

/* Stop Slider */

function stopSlider(){

    clearInterval(autoSlide);

}

/* Buttons */

nextBtn.addEventListener("click",()=>{

    nextSlide();

    stopSlider();

    startSlider();

});

prevBtn.addEventListener("click",()=>{

    prevSlide();

    stopSlider();

    startSlider();

});

/* Dots */

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentSlide=index;

        showSlide(currentSlide);

        stopSlider();

        startSlider();

    });

});

/* Pause on Hover */

const hero=document.querySelector(".hero");

hero.addEventListener("mouseenter",stopSlider);

hero.addEventListener("mouseleave",startSlider);

/* Start */

showSlide(currentSlide);

startSlider();


/*=====================================
        TOUCH SWIPE
======================================*/

let startX = 0;

hero.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

});

hero.addEventListener("touchend",(e)=>{

    let endX = e.changedTouches[0].clientX;

    if(startX - endX > 60){

        nextSlide();

    }

    if(endX - startX > 60){

        prevSlide();

    }

});



function openImage(src){
    document.getElementById("lightbox").style.display="flex";
    document.getElementById("lightbox-img").src=src;
}

function closeImage(){
    document.getElementById("lightbox").style.display="none";
}

const openVideo = document.getElementById("openVideo");
const closeVideo = document.getElementById("closeVideo");
const videoModal = document.getElementById("videoModal");
const popupVideo = document.getElementById("popupVideo");

openVideo.addEventListener("click", () => {

    videoModal.classList.add("active");
    popupVideo.play();

});

closeVideo.addEventListener("click", () => {

    videoModal.classList.remove("active");
    popupVideo.pause();
    popupVideo.currentTime = 0;

});

videoModal.addEventListener("click", (e) => {

    if(e.target === videoModal){

        videoModal.classList.remove("active");
        popupVideo.pause();
        popupVideo.currentTime = 0;

    }

});