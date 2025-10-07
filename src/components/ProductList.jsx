import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="product-list">
      {products.map((p) => (
        <div className="product-card" key={p._id}>
          <h3>{p.name}</h3>
          <p>Price: ₹{p.price}</p>
          <p>Stock: {p.stock}</p>
          <button 
            onClick={() => addToCart(p._id)} 
            disabled={p.stock === 0}
          >
            {p.stock === 0 ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
