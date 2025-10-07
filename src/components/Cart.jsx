import React from "react";

const Cart = ({ cart }) => {
  
  if (!cart.products || cart.products.length === 0) {
    return (
      <div className="cart-summary">
        <h2>Cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
     
      {/*
      <ul>
        {cart.products.map((item) => (
          <li key={item.productId._id}>
            {item.productId.name} x {item.quantity} = ${item.productId.price * item.quantity}
          </li>
        ))}
      </ul>
      */}
      <p>Subtotal: ${cart.subtotal}</p>
      <p>Tax (10%): ${cart.tax}</p>
      <p>Total: ${cart.total}</p>
    </div>
  );
};

export default Cart;
