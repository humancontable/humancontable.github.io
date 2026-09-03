const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {

    mainNav.classList.toggle("active");

});


const navLinks = document.querySelectorAll("#mainNav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("active");

    });

});
