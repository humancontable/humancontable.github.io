/* =====================================================
   HUMAN – ESTRATEGIAS EMPRESARIALES
   JavaScript
   ===================================================== */


document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       MENÚ MOBILE
       ================================================= */

    const menuToggle = document.getElementById("menuToggle");
    const nav = document.getElementById("nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", function () {

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


        /* Cerrar menú al hacer clic en un enlace */

        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("active");

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }


    /* =================================================
       HEADER AL HACER SCROLL
       ================================================= */

    const header = document.getElementById("header");

    function checkHeader() {

        if (!header) return;

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", checkHeader);

    checkHeader();


    /* =================================================
       AÑO AUTOMÁTICO
       ================================================= */

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }


    /* =================================================
       ANIMACIONES AL HACER SCROLL
       ================================================= */

    const animatedElements = document.querySelectorAll(
        ".service-card, .digital-item, .process-item, .about-content, .corporate-content"
    );


    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    animatedElements.forEach(function (element) {

        element.classList.add("animate");

        observer.observe(element);

    });


    /* =================================================
       SMOOTH SCROLL
       ================================================= */

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

        anchor.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                const headerHeight =
                    document.getElementById("header").offsetHeight;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.pageYOffset -
                    headerHeight;

                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }

        });

    });


    /* =================================================
       PREVENIR ENVÍOS / ERRORES DE LINKS VACÍOS
       ================================================= */

    document.querySelectorAll('a[href="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

        });

    });

});
