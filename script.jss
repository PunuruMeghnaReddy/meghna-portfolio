```javascript
/* =========================================
   PORTFOLIO JAVASCRIPT
========================================= */


/* -------------------------------
   ACTIVE NAVIGATION
-------------------------------- */

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {

    item.addEventListener("click", function () {

        navItems.forEach(nav => {
            nav.classList.remove("active");
        });

        this.classList.add("active");

    });

});


/* -------------------------------
   CHANGE ACTIVE NAV ON SCROLL
-------------------------------- */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach(item => {

        item.classList.remove("active");

        const link = item.getAttribute("href");

        if (link === "#" + currentSection) {

            item.classList.add("active");

        }

    });

});


/* -------------------------------
   SIMPLE SCROLL REVEAL
-------------------------------- */

const revealElements = document.querySelectorAll(
    ".stat-box, .project-card, .skill-category, .achievement-card, .about-card"
);

const observer = new IntersectionObserver(
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

    element.classList.add("hidden");

    observer.observe(element);

});


/* -------------------------------
   CONSOLE MESSAGE
-------------------------------- */

console.log(
    "Welcome to Punuru Meghna's Portfolio 🚀"
);
```