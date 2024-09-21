// src/pages/Cart.jsx
import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import Swal from 'sweetalert2'; // Import SweetAlert
import './Cart.css';

const Cart = () => {
  const { cart } = useCart();
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    cart.forEach(item => {
      initialQuantities[item.id] = item.quantity || 1; // Set initial quantity
    });
    setQuantities(initialQuantities);
  }, [cart]);

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(value, 1), // Prevent quantity less than 1
    }));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + (item.price * (quantities[item.id] || 1));
    }, 0).toFixed(2);
  };

  const handleCheckout = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Checkout',
      html: `
        <input id="name" class="swal2-input" placeholder="Name" required>
        <input id="address" class="swal2-input" placeholder="Address" required>
        <input id="phone" class="swal2-input" placeholder="Phone" required>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Order Place',
      preConfirm: () => {
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        if (!name || !address || !phone) {
          Swal.showValidationMessage('Please fill in all fields');
        }
        return { name, address, phone };
      }
    });

    if (formValues) {
      Swal.fire('Order placed!', 'Your order has been successfully placed.', 'success');
      // You can handle the order placement logic here (e.g., API call)
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <label>
                    Quantity:
                    <input
                      type="number"
                      value={quantities[item.id] || 1} // Default to 1 if undefined
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                      min="1"
                    />
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${calculateTotalPrice()}</h3>
            <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
