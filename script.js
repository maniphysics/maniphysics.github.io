// ================================
// MANIPHYSICS v1.0
// script.js
// ================================

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {

        const targetId = this.getAttribute('href');

        if (targetId.startsWith("#")) {

            e.preventDefault();

            const target = document.querySelector(targetId);

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }
        }

    });
});


// Navbar background on scroll

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        nav.style.background = "rgba(2,6,23,0.96)";
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        nav.style.background = "rgba(2,6,23,.85)";
        nav.style.boxShadow = "none";

    }

});


// Reveal sections while scrolling

const sections = document.querySelectorAll("section");

const reveal = () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            section.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


// Highlight active navigation link

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
