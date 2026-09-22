import type { Product } from "../types/product";
import ProductCard from "./ProductCard";

type ProductListProps = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

function ProductList({
  products,
  onAddToCart,
}: ProductListProps) {
  return (
    <div>
      <h2>Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;