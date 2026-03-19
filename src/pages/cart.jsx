// useContext allows this component to consume global state
import { useContext, useMemo } from 'react';

// Import the CartContext created using React Context API
import { CartContext } from '../context/CartContext';

// React Router link
import { Link } from 'react-router-dom';

const Cart = () => {
  // Access global cart state and actions from Context (no prop drilling)
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  // Compute total price from global cart state
  const total = useMemo(
    () => cart.reduce((sum, item) => sum + Number(item.price) * item.qty, 0),
    [cart]
  );

  // Helper function to format currency (Philippine peso format)
  const formatPrice = (value) =>
    Number(value).toLocaleString('en-PH', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <div className="container my-5">
      <h2 className="mb-4">🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <>
          {cart.map((item) => (
            <div className="card mb-3 shadow-sm" key={item.id}>
              <div className="card-body">
                <div className="row align-items-center g-3">

                  {/* Product Info */}
                  <div className="col-12 col-md-4 col-lg-5 d-flex align-items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: 72,
                        height: 72,
                        objectFit: 'cover',
                        borderRadius: 6
                      }}
                    />
                    <div>
                      <h5 className="mb-1">{item.name}</h5>
                      <small className="text-muted">
                        ₱{formatPrice(item.price)}
                      </small>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-center align-items-center">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="btn btn-outline-secondary btn-sm"
                    >
                      –
                    </button>

                    <span className="mx-3 fw-bold">{item.qty}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="btn btn-outline-secondary btn-sm"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <div className="col-12 col-md-4 col-lg-4 text-center text-md-end">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Remove
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}

          {/* Total Section */}
          <div className="card shadow mt-4">
            <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-center">
              <h4 className="mb-3 mb-md-0">
                Total: ₱{formatPrice(total)}
              </h4>

              {/* ✅ PDF-CORRECT CHECKOUT LINK */}
              <Link
                to="/checkout"
                className="btn btn-success btn-lg"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
``