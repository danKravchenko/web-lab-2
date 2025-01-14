var header = document.getElementsByTagName("header")[0];
var body = document.getElementsByTagName("body")[0];
var splashScreen = document.getElementById("splash-screen");
var dorpDownMenu =  document.querySelector(".dropdown-links-list");

setNewValueForProperty();

function setNewValueForProperty(){
    splashScreen.style.setProperty("--height", `${body.offsetHeight}px`);
    dorpDownMenu.style.setProperty("--top", `${header.offsetHeight}px`);
};

window.addEventListener("resize", () => {
    setNewValueForProperty();
});
