const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuBtn.innerHTML =
        navLinks.classList.contains("active") ? "✕" : "☰";

});

const dropdown = document.querySelector(".dropdown");
const dropdownLink = document.querySelector(".dropdown > a");

dropdownLink.addEventListener("click", function(e){

    if(window.innerWidth <= 768){

        e.preventDefault();
        dropdown.classList.toggle("active");

    }

});