// import { useEffect, useState } from "react";
// import axios from "axios";
// import ProductList from "./components/ProductList";
// import Cart from "./components/Cart";
// import "./App.css";

// // const userId = "user123"; // Example user
const API = "https://cart-backend-xea4.onrender.com";
// const userId = "anonymousUser";


// function App() {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState({ subtotal: 0, tax: 0, total: 0 });

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const res = await axios.get("http://localhost:4000/products");
//       setProducts(res.data);
//     };
//     fetchProducts();
//     fetchCartTotal();
//   }, []);

//   const addToCart = async (productId) => {
//     await axios.post("http://localhost:4000/cart/add", {
//       userId,
//       productId,
//       quantity: 1,
//     });
//     fetchCartTotal();
//   };

//   const fetchCartTotal = async () => {
//     const res = await axios.get("http://localhost:4000/cart/total", {
//       headers: { userId },
//     });
//     setCart(res.data);
//   };

//   return (
//     <div className="container">
//       <h1>Products</h1>
//       <ProductList products={products} addToCart={addToCart} />
//       <Cart cart={cart} />
//     </div>
//   );
// }

// export default App;
  
import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

const userId = "anonymousUser"; // single dummy user

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ subtotal: 0, tax: 0, total: 0, products: [] });

  useEffect(() => {
    fetchProducts();
    fetchCartTotal();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:4000/products");
      setProducts(res.data);
    } catch (err) {
      console.error("Fetch products error:", err);
    }
  };

  const addToCart = async (productId) => {
    try {
      await axios.post("http://localhost:4000/cart/add", {
        userId,
        productId,
        quantity: 1,
      });
      fetchCartTotal();
    } catch (err) {
      console.error("Add to cart error:", err);
    }
  };

  const fetchCartTotal = async () => {
    try {
      const res = await axios.get("http://localhost:4000/cart/total", {
        headers: { userId },
      });
      setCart(res.data);
    } catch (err) {
      console.error("Fetch cart total error:", err);
    }
  };

  return (
    <div className="container">
      <h1>Products</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;
