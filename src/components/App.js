import React, { useState } from "react";
import "./../styles/App.css";
import Menu from './Menu'

// sample data
const menuItems = [
    { id: 1, title: "Pancakes", category: "breakfast", price: 15.99, img: "https://via.placeholder.com/150" },
    { id: 2, title: "Burger", category: "lunch", price: 13.99, img: "https://via.placeholder.com/150" },
    { id: 3, title: "Milkshake", category: "shakes", price: 6.99, img: "https://via.placeholder.com/150" },
    { id: 4, title: "Egg Sandwich", category: "breakfast", price: 10.99, img: "https://via.placeholder.com/150" },
    { id: 5, title: "Pizza", category: "lunch", price: 18.99, img: "https://via.placeholder.com/150" },
    { id: 6, title: "Oreo Shake", category: "shakes", price: 8.99, img: "https://via.placeholder.com/150" }
];

const App = () => {
    const [menu, setMenu] = useState(menuItems);

    const filterItems = (category) => {
        if (category === "all") {
            setMenu(menuItems);
        } else {
            const filtered = menuItems.filter((item) => item.category === category);
            setMenu(filtered);
        }
    };

    return (
        <div id="main">
            <Menu menu={menu} filterItems={filterItems} />
        </div>
    );
};

export default App;