import "./Dashboard.css";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/product";
import { useState } from "react";
import { useCartStore } from "../store/cartStore";

export default function Dashboard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [search, setSearch] = useState("");

  // Cart store
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  const filtered = data?.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        {/* Products Section */}
        <div className="products-section">

          <input
            type="text"
            placeholder="Search by title or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="dashboard-search"
          />

          <div className="products-grid">
            {filtered?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Fixed Shopping Cart Sidebar */}
        <div className="shopping-cart-sidebar">
          <h2>Shopping Cart</h2>
          {cart.length === 0 && <p>Your cart is empty.</p>}

          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.title}</span>
              <div className="quantity-controls">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          {cart.length > 0 && <p className="total-price">Total: ₹ {totalPrice}</p>}
        </div>
      </div>
    </>
  );
}