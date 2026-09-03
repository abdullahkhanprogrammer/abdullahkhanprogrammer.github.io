// =========================
// CURRENT YEAR
// =========================

document.getElementById("year").textContent = new Date().getFullYear();


// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a[href^='#']");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );
    });
});


// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".section, .about-grid, .service-card, .project, .skill"
);

const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


// =========================
// TYPING EFFECT
// =========================

const typingText = document.querySelector(".hero h2");

if (typingText) {
    const words = [
        "Web Developer",
        "Software Developer",
        "Creative Problem Solver"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
        const word = words[wordIndex];

        if (!deleting) {
            typingText.textContent = word.substring(0, charIndex + 1);
            charIndex++;

            if (charIndex === word.length) {
                deleting = true;
                setTimeout(typeEffect, 1500);
                return;
            }
        } else {
            typingText.textContent = word.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }

        setTimeout(typeEffect, deleting ? 60 : 100);
    }

    typeEffect();
}