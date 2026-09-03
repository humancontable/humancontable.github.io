/* =========================================
   HUMAN - JAVASCRIPT
========================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       AÑO AUTOMÁTICO
    ===================================== */

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }


    /* =====================================
       MENÚ MOBILE
    ===================================== */

    const menuButton = document.getElementById("menuButton");

    const nav = document.getElementById("nav");


    if (menuButton && nav) {

        menuButton.addEventListener("click", function () {

            nav.classList.toggle("active");

        });


        /* Cerrar menú al hacer clic */

        const navLinks = nav.querySelectorAll("a");


        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("active");

            });

        });

    }


    /* =====================================
       HEADER AL HACER SCROLL
    ===================================== */

    const header = document.getElementById("header");


    window.addEventListener("scroll", function () {

        if (!header) return;


        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });


    /* =====================================
       ANIMACIÓN AL ENTRAR EN PANTALLA
    ===================================== */

    const animatedElements = document.querySelectorAll(
        ".service-card, .process-item, .about-content, .about-image"
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


    /* =====================================
       SCROLL SUAVE
    ===================================== */

    const links = document.querySelectorAll('a[href^="#"]');


    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");


            if (targetId === "#") return;


            const target = document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                const headerHeight = header
                    ? header.offsetHeight
                    : 0;


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


});
