const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const dropdown = document.querySelector(".dropdown");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

if (dropdown) {
    const dropdownLink = dropdown.querySelector("a");

    dropdownLink.addEventListener("click", function (e) {
        if (window.innerWidth <= 992) {
            e.preventDefault();
            dropdown.classList.toggle("active");
        }
    });
}