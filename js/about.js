// =========================
// Mobile Menu Toggle
// =========================

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

    // Close menu after clicking any link
    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");
            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

        });

    });

}

// =========================
// Navbar Scroll Effect
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});

// =========================
// Scroll To Top
// =========================

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (!scrollBtn) return;

    if (window.scrollY > 300) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }

});

// =========================
// Lightbox
// =========================

function openImage(src) {

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    if (lightbox && lightboxImg) {
        lightbox.style.display = "flex";
        lightboxImg.src = src;
    }

}

function closeImage() {

    const lightbox = document.getElementById("lightbox");

    if (lightbox) {
        lightbox.style.display = "none";
    }

}

// =========================
// Mobile Dropdown
// =========================

const dropdown = document.querySelector(".dropdown");
const dropdownToggle = document.querySelector(".dropdown > a");

if (dropdown && dropdownToggle) {

    dropdownToggle.addEventListener("click", function (e) {

        if (window.innerWidth <= 992) {

            e.preventDefault(); // About page open nahi hogi

            dropdown.classList.toggle("active");

        }

    });

}