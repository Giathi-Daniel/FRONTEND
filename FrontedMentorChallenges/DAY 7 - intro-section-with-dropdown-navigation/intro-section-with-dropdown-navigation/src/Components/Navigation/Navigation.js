const menuOpen = document.getElementById("open");
const menuClose = document.getElementById("close");
const navItems = document.querySelectorAll(".nav_links");
const formNav = document.querySelector(".nav_form");

menuOpen.addEventListener('click', () => {
    navItems.forEach(item => {
        item.classList.toggle("active");
        item.style.display = "block";
    });
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
    formNav.style.display = "block";
});

menuClose.addEventListener('click', () => {
    navItems.forEach(item => {
        item.classList.remove("active");
        item.style.display = "none";
    });
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
    formNav.style.display = "none";

});
