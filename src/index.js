import "./styles/style.css";
import { loadHomePage } from "./scripts/home.js";
import { loadMenuPage } from "./scripts/menu.js";
import { loadContactPage } from "./scripts/contact.js";

loadHomePage();

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");

homeButton.addEventListener("click", () => loadHomePage());
menuButton.addEventListener("click", () => loadMenuPage());
contactButton.addEventListener("click", () => loadContactPage());

const homeLink = document.querySelector(".home-link");
const menuLink = document.querySelector(".menu-link");
const contactLink = document.querySelector(".contact-link");

homeLink.addEventListener("click", () => loadHomePage());
menuLink.addEventListener("click", () => loadMenuPage());
contactLink.addEventListener("click", () => loadContactPage());
