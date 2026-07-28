const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const dropdown = document.querySelector(".dropdown");
const dropdownLink = document.querySelector(".dropdown > a");

// Mobile Menu
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.innerHTML = navLinks.classList.contains("active") ? "✕" : "☰";
});

// Mobile Dropdown
dropdownLink.addEventListener("click", (e) => {
    if (window.innerWidth <= 992) {
        e.preventDefault();
        dropdown.classList.toggle("active");
    }
});