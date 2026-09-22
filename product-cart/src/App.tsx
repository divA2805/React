import { useState } from "react";
import type { Product, CartItem } from "./types/product";
import { products } from "./data/Products";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";
function App() {

  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id? {...item,quantity: item.quantity + 1}: item);
          }
      return [
        ...prevCart,
        {
          product,
          quantity: 1,
        },
      ];
    });
  };


  const increaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((prevCart) =>prevCart.map((item) =>item.product.id === id? {...item, quantity: item.quantity - 1} :item)
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) =>prevCart.filter((item) => item.product.id !== id));
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) =>total + item.product.price * item.quantity,0);

  return (
    <div className="app">

      <header className="header">
        <h1>ShopCart</h1>
        <button
          className="cart-button"
          onClick={() => setIsCartOpen(true)}
          aria-label="Open cart">🛒
          <span>
            {cartCount}
          </span>
        </button>
      </header>
      <main className="main-content">
        <ProductList products={products} onAddToCart={addToCart}/>
      </main>
      {isCartOpen && (
        <Cart
          cart={cart}
          totalPrice={totalPrice}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onRemove={removeFromCart}
          onClose={() => setIsCartOpen(false)}
        />
      )
      }

    </div>
  );
}

export default App;