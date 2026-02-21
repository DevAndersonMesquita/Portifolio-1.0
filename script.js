const menuIcon = document.getElementById("menu-icon");
const itens = document.getElementById("itens");
const navLinks = document.querySelectorAll("#itens a");

menuIcon.addEventListener("click", () => {
    itens.classList.toggle("active");

    // troca ícone
    if (itens.classList.contains("active")) {
        menuIcon.textContent = "close";
    } else {
        menuIcon.textContent = "menu";
    }
});
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        itens.classList.remove("active");
        menuIcon.textContent = "menu";
    });
});document.addEventListener("click", (event) => {

    const isClickInsideMenu = itens.contains(event.target);
    const isClickOnIcon = menuIcon.contains(event.target);

    if (!isClickInsideMenu && !isClickOnIcon) {
        itens.classList.remove("active");
        menuIcon.textContent = "menu";
    }
});