import React from 'react'

const Menu = ({ menu, filterItems }) => {
    return (
        <div className="menu-container">

            <h2 className="menu-title">Our Menu</h2>

            {/* FILTER BUTTONS */}
            <div className="btn-container">
                <button className="filter-btn" onClick={() => filterItems("all")}>All</button>
                <button className="filter-btn" id="filter-btn-1" onClick={() => filterItems("breakfast")}>
                    Breakfast
                </button>
                <button className="filter-btn" id="filter-btn-2" onClick={() => filterItems("lunch")}>
                    Lunch
                </button>
                <button className="filter-btn" id="filter-btn-3" onClick={() => filterItems("shakes")}>
                    Shakes
                </button>
            </div>

            {/* MENU ITEMS */}
            <div className="section-center">
                {menu.map((item) => (
                    <div
                        key={item.id}
                        className="menu-item"
                        data-testid={`menu-item-${item.category}`}
                    >
                        <img src={item.img} alt={item.title} className="photo" />

                        <div className="item-info">
                            <header>
                                <h4>{item.title}</h4>
                                <h4 className="price">${item.price}</h4>
                            </header>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Menu