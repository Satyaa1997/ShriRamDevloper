// ===============================
// Mobile Menu Toggle
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }

    });

    // Close menu when link is clicked
    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

        });

    });

}

// ===============================
// Navbar Shadow on Scroll
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});