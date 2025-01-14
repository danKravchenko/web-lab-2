var pathName = window.location.pathname;
var headerLinks = document.querySelector(".header-links-list");

var links = Object.values(headerLinks.getElementsByTagName("a"));
var listElements = Object.values(headerLinks.getElementsByTagName("li"));

links.forEach((link, index) => {
    if (link.getAttribute("href") == pathName) {
        listElements[index].setAttribute("class", "active-link");
    }
})