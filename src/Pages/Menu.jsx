import { useState } from "react";

function Menu() {
  const [search, setSearch] = useState("");

  const menuItems = [
    {
      id: 1,
      name: "Chicken Alfredo",
      category: "Main Course",
      price: "$18.99",
    },
    {
      id: 2,
      name: "Vegetable Pasta",
      category: "Vegetarian",
      price: "$15.99",
    },
    {
      id: 3,
      name: "Margherita Pizza",
      category: "Vegetarian",
      price: "$14.99",
    },
    {
      id: 4,
      name: "Garden Salad",
      category: "Starter",
      price: "$8.99",
    },
    {
      id: 5,
      name: "Chocolate Lava Cake",
      category: "Dessert",
      price: "$7.99",
    },
  ];

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>🍕 Restaurant Menu</h2>

      <input
        type="text"
        placeholder="Search menu..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <h3>{item.name}</h3>
          <p>Category: {item.category}</p>
          <p>Price: {item.price}</p>

          <button>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Menu;