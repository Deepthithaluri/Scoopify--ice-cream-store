import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Cart({ cart, setCart, removeFromCart, increaseQty, decreaseQty }) {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const total = cart.reduce((sum, item) => {
    const toppingsTotal = item.selectedToppings
      ? item.selectedToppings.reduce((tSum, t) => tSum + t.price, 0)
      : 0;

    return sum + (item.basePrice + toppingsTotal) * item.quantity;
  }, 0);

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      items: cart,
      total: total,
      date: new Date().toLocaleString(),
      email: localStorage.getItem("userEmail"),
    };

    existingOrders.push(newOrder);

    localStorage.setItem("orders", JSON.stringify(existingOrders));

    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));

    navigate("/success");
  };

  return (
    <div className="p-6 max-w-3xl">
      <h1 className="text-2xl font-bold">Cart 🛒</h1>

      {cart.length === 0 && (
        <p className="mt-4 text-gray-600">Your cart is empty</p>
      )}

      {cart.map((item, index) => (
        <div key={index} className="border p-3 mt-3">
          <h2>{item.name}</h2>

          <p>₹ {item.basePrice}</p>

          {item.selectedToppings &&
            item.selectedToppings.map((topping, i) => (
              <p key={i}>+ {topping.name}</p>
            ))}

          <button
            onClick={() => decreaseQty(index)}
            className="bg-gray-300 px-2 mr-2"
          >
            -
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => increaseQty(index)}
            className="bg-gray-300 px-2 ml-2"
          >
            +
          </button>

          <br />

          <button
            onClick={() => removeFromCart(index)}
            className="bg-red-500 text-white px-2 py-1 mt-2 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      <h2 className="text-xl font-bold mt-4">
        Total: ₹ {total}
      </h2>

      <button
        onClick={handlePlaceOrder}
        className="bg-pink-500 text-white px-4 py-2 mt-4 rounded hover:bg-pink-600"
      >
        Place Order
      </button>
    </div>
  );
}

export default Cart;