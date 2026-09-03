/* =========================================================
   HUMAN – ESTRATEGIAS EMPRESARIALES
   ========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MENÚ MOBILE
    ===================================================== */

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


        /* Cerrar menú al seleccionar una opción */

        const links = nav.querySelectorAll("a");


        links.forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("active");


                const icon = menuToggle.querySelector("i");


                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            });

        });

    }



    /* =====================================================
       HEADER AL HACER SCROLL
    ===================================================== */

    const header = document.getElementById("header");


    function updateHeader() {

        if (!header) return;


        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader
    );


    updateHeader();



    /* =====================================================
       AÑO AUTOMÁTICO
    ===================================================== */

    const year = document.getElementById("year");


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }



    /* =====================================================
       ANIMACIONES
    ===================================================== */

    const animatedElements =
        document.querySelectorAll(
            ".service-card, .digital-card, .process-card, .about-content, .corporate-content, .uafe-content"
        );


    animatedElements.forEach(function (element) {

        element.classList.add("animate");

    });


    const observer =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    animatedElements.forEach(function (element) {

        observer.observe(element);

    });



    /* =====================================================
       SCROLL SUAVE
    ===================================================== */

    const anchors =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchors.forEach(function (anchor) {


        anchor.addEventListener(
            "click",
            function (event) {


                const targetId =
                    this.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                const headerHeight =
                    header
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

        );

    });


});
