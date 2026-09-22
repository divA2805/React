import type { Product } from "../types/product";

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

function ProductCard({
  product,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-icon">
        🛍️
      </div>

      <div className="product-content">
        <h3>{product.name}</h3>

        <p className="product-price">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <button
          className="add-button"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;