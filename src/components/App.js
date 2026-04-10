import React, { useState } from "react";
import "./../styles/App.css";

// sample data
const menu = [
  { id: 1, title: "Pancakes", category: "breakfast", price: 15.99, img: "https://via.placeholder.com/150" },
  { id: 2, title: "Burger", category: "lunch", price: 13.99, img: "https://via.placeholder.com/150" },
  { id: 3, title: "Milkshake", category: "shakes", price: 6.99, img: "https://via.placeholder.com/150" },
  { id: 4, title: "Egg Sandwich", category: "breakfast", price: 10.99, img: "https://via.placeholder.com/150" },
  { id: 5, title: "Pizza", category: "lunch", price: 18.99, img: "https://via.placeholder.com/150" },
  { id: 6, title: "Oreo Shake", category: "shakes", price: 8.99, img: "https://via.placeholder.com/150" }
];

const App = () => {
  const [items, setItems] = useState(menu);

  const filterItems = (category) => {
    if (category === "all") {
      setItems(menu);
    } else {
      const filtered = menu.filter((item) => item.category === category);
      setItems(filtered);
    }
  };

  return (
    <div id="main">

      <h2>Our Menu</h2>

      {/* FILTER BUTTONS */}
      <div>
        <button onClick={() => filterItems("all")}>All</button>
        <button id="filter-btn-1" onClick={() => filterItems("breakfast")}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => filterItems("lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => filterItems("shakes")}>
          Shakes
        </button>
      </div>

      {/* MENU ITEMS */}
      <div>
        {items.map((item) => (
          <div
            key={item.id}
            data-testid={`menu-item-${item.category}`}
          >
            <img src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
            <p>${item.price}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default App;