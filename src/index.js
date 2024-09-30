import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>
      {/* condional rendering
       */}

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaobj={pizza} key={pizza.name} />
            // <li className="pizza">
            //   <img src={pizza.photoName} alt={pizza.name} />
            //   <div>
            //     <h3>{pizza.name}</h3>
            //     <p>{pizza.ingredients}</p>
            //     <span>{pizza.price + 3}</span>
            //   </div>
            // </li>
          ))}
        </ul>
      ) : (
        <p>we are still working on our menu please come back later </p>
      )}
    </main>
  );
}

function Pizza(props) {
  if (props.pizzaobj.soldOut) return null;
  return (
    <li className="pizza">
      <img src={props.pizzaobj.photoName} alt={props.pizzaobj.name} />
      <div>
        <h3>{props.pizzaobj.name}</h3>
        <p>{props.pizzaobj.ingredients}</p>
        <span>{props.pizzaobj.price + 3}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours={closeHours} />
      ) : (
        <p>
          we are close but will be happy to welcome you between {openHours}:00
          and {closeHours}:00
        </p>
      )}

      {/* {new Date().toLocaleTimeString()}.We are currently open! Call us at
      123-456-7890 */}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        we're open until {props.closeHours}:00. Come visit us or order online.
      </p>
      <button className="btn">order</button>
    </div>
  );
}

// how we render in react 18 and above

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
