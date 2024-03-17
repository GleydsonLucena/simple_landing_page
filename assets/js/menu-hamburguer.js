
const mainMenu = document.getElementById("menu-hamb-main");
const menu = document.getElementById("menu-hamb");

menu.addEventListener("click", openMainMenu = () => {
    if (mainMenu.style.display == "none") {
        mainMenu.style.display = "flex"
    } else {
        mainMenu.style.display = "none"
    }
});


mainMenu.addEventListener("click", msg = () => {
    mainMenu.style.display = "none"
})