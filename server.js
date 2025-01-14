var express = require("express");
var handlebars = require("express-handlebars");

var app = express();

const hbs = handlebars.create({
    defaultLayout: 'index', 
	extname: 'hbs'
});

app.use(express.static(__dirname + "/public"));
app.engine('hbs', hbs.engine);
app.set('views', './views');
app.set("view engine", "hbs");

app.get("/", (req, res) => {
    res.render("main", {heading: "Головна сторінка", title: "Мій персональний сайт"});
});

app.get("/my-university", (req, res) => {
    res.render("my-university", {heading: "Мій вищий навчальний заклад", title:"Мій ЗВО"});
});

app.get("/contacts", (req, res) => {
    res.render("contacts", {heading: "Зв'язок зі мною", title:"Контакти"});
});

app.get("/about-author", (req, res) => {
    res.render("about-author", {heading: "Трішки про мене...", title:"Автобіографія"});
});

app.get("/hobby", (req, res) => {
    res.render("hobby", {heading: "Мої захоплення", title:"Мої захоплення"});
});

app.get("/my-group", (req, res) => {
    res.render("my-group", {heading: "Трохи інформації про мою групу", title:"Моя група"});
});

app.get("/my-profession", (req, res) => {
    res.render("my-profession", {heading: "Про мою спеціальність", title:"Моя спеціальність"});
});

app.listen(3000, () => {
    console.log("Server is running!");
});
