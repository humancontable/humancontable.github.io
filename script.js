/* =========================================================
   HUMAN – ESTRATEGIAS EMPRESARIALES
   JAVASCRIPT
========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       VARIABLES
    ====================================================== */

    const header = document.getElementById("header");

    const menuToggle = document.getElementById("menuToggle");

    const nav = document.getElementById("nav");

    const navLinks = document.querySelectorAll(".nav-link");

    const year = document.getElementById("year");



    /* =====================================================
       AÑO AUTOMÁTICO
    ====================================================== */

    if (year) {

        year.textContent = new Date().getFullYear();

    }



    /* =====================================================
       MENÚ MÓVIL
    ====================================================== */

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", function () {

            nav.classList.toggle("active");

            const icon =
                menuToggle.querySelector("i");

            if (nav.classList.contains("active")) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        });


        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("active");

                const icon =
                    menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            });

        });

    }



    /* =====================================================
       HEADER AL HACER SCROLL
    ====================================================== */

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    updateHeader();


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );



    /* =====================================================
       ANIMACIONES REVEAL
    ====================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const observer =
        new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }

        );


    revealElements.forEach(function (element) {

        observer.observe(element);

    });



    /* =====================================================
       NAVEGACIÓN ACTIVA
    ====================================================== */

    const sections =
        document.querySelectorAll("main section[id]");


    function updateActiveNavigation() {

        let currentSection = "";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            const sectionBottom =
                sectionTop + section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");


            if (
                href === "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );


    updateActiveNavigation();



    /* =====================================================
       CERRAR MENÚ AL CAMBIAR TAMAÑO
    ====================================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 850) {

            if (nav) {

                nav.classList.remove("active");

            }

            if (menuToggle) {

                const icon =
                    menuToggle.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                }

            }

        }

    });



    /* =====================================================
       SMOOTH SCROLL
    ====================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (anchor) {

        anchor.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    targetId === "#" ||
                    !targetId
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetId);


                if (!target) return;


                event.preventDefault();


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });



    /* =====================================================
       PREVENIR FLASH EN IMÁGENES
    ====================================================== */

    const images =
        document.querySelectorAll("img");


    images.forEach(function (image) {

        image.addEventListener(
            "load",
            function () {

                image.classList.add("loaded");

            }
        );

    });


});
