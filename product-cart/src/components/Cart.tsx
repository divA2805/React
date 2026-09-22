import type { CartItem } from "../types/product";

type CartProps = {
  cart: CartItem[];
  totalPrice: number;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
  onClose: () => void;
};

function Cart({cart,totalPrice,onIncrease,onDecrease,onRemove,onClose}: CartProps) {
  return (
    <div className="cart-overlay">
      <div className="cart-popup">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button
            className="close-button"
            onClick={onClose}> ×
          </button>
        </div>
        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">
              🛒
            </div>
            <h3>Your cart is empty</h3>
            <p>
              Add some products to your cart.
            </p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div
                  className="cart-item"
                  key={item.product.id}
                >
                  <div className="cart-item-info">
                    <h3>{item.product.name}</h3>
                    <p>
                      ₹{item.product.price}
                    </p>
                  </div>
                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        onDecrease(item.product.id)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        onIncrease(item.product.id)
                      }
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-button"
                    onClick={() =>
                      onRemove(item.product.id)
                    }
                  >
                    Remove
                  </button>

                  <strong>
                    ₹
                    {(item.product.price * item.quantity)}
                  </strong>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <span>Total</span>

              <strong>
                ₹{totalPrice}
              </strong>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;