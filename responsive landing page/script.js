
const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Change navbar when scrolling
window.addEventListener("scroll", function () {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
});

// Open and close the mobile menu
menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");
    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after selecting a link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
    });
});
