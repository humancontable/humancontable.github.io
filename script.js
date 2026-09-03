/* =========================================================
   HUMAN – ESTRATEGIAS EMPRESARIALES
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        nav.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (nav.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    });

}


/* =========================================================
   HEADER SCROLL
   ========================================================= */

const header = document.getElementById("header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* =========================================================
   YEAR
   ========================================================= */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a[href^='#']");

function updateActiveNav() {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;

        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            current = section.id;

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        const headerHeight =
            header ? header.offsetHeight : 0;

        const targetPosition =
            target.offsetTop - headerHeight;

        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});


/* =========================================================
   CLOSE MENU WITH ESCAPE
   ========================================================= */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        nav
    ) {

        nav.classList.remove("active");

        const icon =
            menuToggle?.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    }

});
