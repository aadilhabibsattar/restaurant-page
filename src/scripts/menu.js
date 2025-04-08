import margheritaImg from "../assets/food/margherita.jpg";
import pepperoniImg from "../assets/food/pepperoni.jpg";
import penneImg from "../assets/food/penne.jpg";
import carbonaraImg from "../assets/food/carbonara.jpg";
import ravioliImg from "../assets/food/ravioli.jpg";
import lasagnaImg from "../assets/food/lasagna.jpg";
import tiramisuImg from "../assets/food/tiramisu.jpg";
import gelatoImg from "../assets/food/gelato.jpg";
import "../styles/menu.css";

export function loadMenuPage() {
  const page = document.querySelector("#content");
  const menuDiv = document.createElement("div");
  menuDiv.innerHTML = `
        <div class="menu-section-title first-title">Pizzas</div>
        <section class="food-item-container">
          <img class="food-img" src="${margheritaImg}" alt="margherita">
          <div class="food-text">
            <div class="food-title">Margherita</div>
            <div class="food-description">Classic pizza with tomato, mozzarella, and fresh basil on a thin crust.</div>
            <div class="price">$12</div>
          </div>
        </section>
        <section class="food-item-container">
          <img class="food-img" src="${pepperoniImg}" alt="pepperoni">
          <div class="food-text">
            <div class="food-title">Pepperoni</div>
            <div class="food-description">Crispy pizza topped with spicy pepperoni slices and melted cheese.</div>
            <div class="price">$13</div>
          </div>
        </section>

        <div class="menu-section-title">Pastas</div>
        <section class="food-item-container">
          <img class="food-img" src="${penneImg}" alt="penne">
          <div class="food-text">
            <div class="food-title">Penne</div>
            <div class="food-description">Pasta tossed in a zesty tomato sauce with garlic and herbs.</div>
            <div class="price">$11</div>
          </div>
        </section>
        <section class="food-item-container">
          <img class="food-img" src="${carbonaraImg}" alt="carbonara">
          <div class="food-text">
            <div class="food-title">Carbonara</div>
            <div class="food-description">Creamy pasta with eggs, pancetta, Parmesan, and black pepper.</div>
            <div class="price">$13</div>
          </div>
        </section>
        <section class="food-item-container">
          <img class="food-img scale-img" src="${ravioliImg}" alt="raveoli">
          <div class="food-text">
            <div class="food-title">Ravioli</div>
            <div class="food-description">Pasta pockets filled with ricotta and spinach, served with tomato sauce.</div>
            <div class="price">$14</div>
          </div>
        </section>
        <section class="food-item-container">
          <img class="food-img scale-img" src="${lasagnaImg}" alt="lasagna">
          <div class="food-text">
            <div class="food-title">Lasagna</div>
            <div class="food-description">Layers of pasta, beef ragu, béchamel sauce, and melted mozzarella.</div>
            <div class="price">$15</div>
          </div>
        </section>

        <div class="menu-section-title">Deserts</div>
        <section class="food-item-container">
          <img class="food-img scale-img" src="${tiramisuImg}" alt="tiramisu">
          <div class="food-text">
            <div class="food-title">Tiramisu</div>
            <div class="food-description">Coffee-soaked ladyfingers layered with mascarpone cream and cocoa.</div>
            <div class="price">$7</div>
          </div>
        </section>
        <section class="food-item-container">
          <img class="food-img" src="${gelatoImg}" alt="gelato">
          <div class="food-text">
            <div class="food-title">Gelato</div>
            <div class="food-description">Rich Italian ice cream made with milk, sugar, and natural flavorings.</div>
            <div class="price">$5</div>
          </div>
        </section>
  `;

  page.innerHTML = "";
  page.appendChild(menuDiv);
}
