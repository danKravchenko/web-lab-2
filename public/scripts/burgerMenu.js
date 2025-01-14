var burgerMenu = document.getElementById("burger-menu");
var splashScreen = document.getElementById("splash-screen");
var body = document.getElementsByTagName("body")[0];

splashScreen.addEventListener("click", () => {
    closeMenu();
})

window.addEventListener("resize", () => {
    if (body.offsetWidth > 750) {
        closeMenu();
    }
});

function openMenu() {
    burgerMenu.style.left = "0";
    splashScreen.style.display = "initial";
}

function closeMenu() {
    burgerMenu.style.left = "-294px";
    splashScreen.style.display = "none";
}