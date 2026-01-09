import type { Product } from "../api/product";
import { useCartStore } from "../store/cartStore";
import "../pages/Dashboard.css"; // ✅ import CSS

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <div className="product-card-content">
        <h2>{product.title}</h2>
        <p className="product-category">{product.category}</p>
        <p className="product-price">₹ {product.price}</p>
        <button
          className="add-cart-btn"
          onClick={() =>
            addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              quantity: 1,
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}