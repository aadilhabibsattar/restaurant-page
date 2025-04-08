import backgroundImg from "../assets/background.png";
import restaurantImg from "../assets/restaurant.jpg";
import kitchenImg from "../assets/kitchen.jpg";
import chefImg from "../assets/chef.jpg";
import "../styles/home.css";
import { loadMenuPage } from "./menu.js";

export function loadHomePage() {
  const page = document.querySelector("#content");
  const homeDiv = document.createElement("div");
  homeDiv.innerHTML = `
    <div class="restaurant-intro">
      <img class="restaurant-img" src="${backgroundImg}" alt="restaurant"/>
      <div class="intro-header"><span class="first-line">Simple Ingredients.</span> <span class="second-line">Extraordinary flavors.</span></div>
      <button class="menu-btn">View Our Menu</button>
    </div>

    <section class="home-section">
      <div class="section-text">
        <div class="section-title">Who are we?</div>
        <div class="section-description">
          At F.O. Café, we are passionate culinarians who blend the rustic warmth of wood-fired cooking with the vibrant freshness of Italian cuisine. Our identity is built on crafting authentic dishes—from crispy pizzas to handmade pastas and rich lasagna—using only halal-certified ingredients. We are a team dedicated to creating an atmosphere where elevated dining meets comfortable hospitality, making us the perfect destination for both everyday meals and meaningful celebrations.
        </div>
      </div>
      <img class="restaurant-img" src="${restaurantImg}" alt="restaurant"/>
    </section>

    <section class="home-section">
      <img class="kitchen-img" src="${kitchenImg}" alt="kitchen"/>
      <div class="section-text">
        <div class="section-title">Awards</div>
        <div class="section-description">
          F.O. Café has earned three Michelin stars for its exceptional halal dining experience. We’ve been featured in GQ, The New York Times, and Bon Appétit, recognized for our commitment to industry standards and unique take on Italian cuisine made with the finest ingredients and attention to detail.
        </div>
      </div>
    </section>
    <section class="home-section">
      <div class="section-text">
        <div class="section-title">Chefs</div>
        <div class="section-description">
          Led by Chef Giulia Bianchi, F.O. Café’s team of over 20 professional cooks blend traditional Italian techniques with a modern flare. From the kitchen to the dining room, our staff is dedicated to delivering a warm, memorable experience, where every dish is crafted with care and passion.
        </div>
      </div>
      <img class="chef-img" src="${chefImg}" alt="chef"/>
    </section>
  `;

  page.innerHTML = "";
  page.appendChild(homeDiv);

  const menuButton = document.querySelector(".menu-btn");
  if (menuButton) {
    menuButton.addEventListener("click", () => loadMenuPage());
  } else {
    console.error("Submit button not found!");
  }
}
