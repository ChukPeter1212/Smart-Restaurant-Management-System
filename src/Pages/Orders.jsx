import { useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [food, setFood] = useState("");

  const addOrder = () => {
    if (food.trim() === "") return;

    setOrders([...orders, food]);
    setFood("");
  };

  const deleteOrder = (indexToDelete) => {
    setOrders(
      orders.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div>
      <h2>Customer Orders</h2>

      <input
        type="text"
        placeholder="Enter food item"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />

      <button onClick={addOrder}>Add Order</button>

      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            {order}
            <button onClick={() => deleteOrder(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;