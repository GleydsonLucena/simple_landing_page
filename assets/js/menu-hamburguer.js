// CHAMADO DOS ELEMENTOS 

const mainMenu = document.getElementById("menu-hamb-main");
const menu = document.getElementById("menu-hamb");

// FUNÇÃO DE ABRIR ÁREA DE MENU

menu.addEventListener("click", openMenu = () => {
    if (mainMenu.style.display == "none") {
        mainMenu.style.display = "flex"
    } else {
        mainMenu.style.display = "none"
    }
});

// SEÇÃO DE FECHAR MENU 

mainMenu.addEventListener("click", closedMenu = () => {
    if (window.screen.width < 768) {
        mainMenu.style.display = "none"
    }
});