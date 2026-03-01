import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Shop.css";
import productData from "../data/productData";

const Shop = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });
  const [showCart, setShowCart] = useState(false);
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  useEffect(() => {
    setProducts(productData);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const syncCart = () => {
      const saved = localStorage.getItem("cartItems");
      setCartItems(saved ? JSON.parse(saved) : []);
    };
    window.addEventListener("cartUpdated", syncCart);
    return () => window.removeEventListener("cartUpdated", syncCart);
  }, []);

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    const count = document.querySelector(".cart-count");
    if (count) {
      count.classList.remove("cartBounce");
      void count.offsetWidth;
      count.classList.add("cartBounce");
    }
  };

  const increaseQty = (id) => {
  setCartItems(cartItems.map(item =>
    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  ));
};

const decreaseQty = (id) => {
  setCartItems(cartItems.map(item =>
    item.id === id && item.quantity > 1
      ? { ...item, quantity: item.quantity - 1 }
      : item
  ));
};

const removeItem = (id) => {
  setCartItems(cartItems.filter(item => item.id !== id));
};


  return (
    <>
    {!showCart && (
    <div className="shop-page">
      <div className="shop-banner">
        <h1 className="shop-title">Disney Shop</h1>
        <img src="https://i.pinimg.com/1200x/4a/8a/0c/4a8a0c5a87d312b7ec5f3079b9614c0a.jpg" alt="Disney Store" />
      </div>

      <div className="hot-items">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p>Showing items ({products.length})</p>
            <p>Hot Items</p>
          </div>
          <div className="cart-icon-container" onClick={toggleCart}>
            <img src="/shopping-cart.png" alt="Cart" className="cart-icon" />
            <span className="cart-count">{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
          </div>
        </div>
      </div>
      
      <div className="shop-main">
        <div className="shop-sidebar">
          <ul className="category-list">
            <li>Clothing & Costumes <span className="plus">+</span></li>
            <li>Accessories <span className="plus">+</span></li>
            <li>Toys <span className="plus">+</span></li>
            <li>Household<br />School supplies <span className="plus">+</span></li>
          </ul>

          <h3>Filter</h3>

          <label>Price</label>
          <input type="number" placeholder="" />-
          <input type="number" placeholder="" />

          <label>Size</label>
          <div className="filter-group">
            <label><input type="radio" name="size" />XS</label>
            <label><input type="radio" name="size" />S</label>
            <label><input type="radio" name="size" />M</label>
            <label><input type="radio" name="size" />L</label>
            <label><input type="radio" name="size" />XL</label>
          </div>

          <label>Material</label>
          <div className="filter-group">
            <label><input type="radio" name="material" /> Wool</label>
            <label><input type="radio" name="material" /> Cotton</label>
            <label><input type="radio" name="material" /> Paper</label>
            <label><input type="radio" name="material" /> Jean</label>
            <label><input type="radio" name="material" /> Glass</label>
            <label><input type="radio" name="material" /> Plastic</label>
            <label><input type="radio" name="material" /> Teddy</label>
          </div>
          <div className="filter-btn-group">
            <button className="filter-btn">Done</button>
            <button className="filter-btn">Delete Filter</button>
          </div>
        </div>

        <div className="shop-products">
          {products.map((item) => (
            <div key={item.id} className="product-card">
              <Link
                to={`/shop/${item.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img src={item.image || item.images?.[0]} alt={item.name} />
                <p>{item.name}</p>
              </Link>
              <p>Available: {item.available}</p>
              <p>Price: {item.price}$</p>
              <div className="product-buttons">
                <button onClick={() => navigate(`/shop/${item.id}`)}>
                  Quick shop
                </button>
                <button onClick={() => addToCart(item)}>Add to bag</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    )}

    {showCart && (
    <div className="cart-overlay">
    <h2>My Shopping Cart</h2>
    {cartItems.length === 0 ? (
      <p style={{ textAlign: "center", fontSize: '20px' }}>Your cart is empty.</p>
    ) : (
    <div className="cart-items">
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className="cart-item-details">
            <p className="cart-item-name">{item.name}</p>
            <div className="cart-row">
                <p>${item.price}</p>
                <div className="cart-quantity">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
            </div>
          </div>
          <button className="remove-btn" onClick={() => removeItem(item.id)}>✕</button>
        </div>
      ))}
    </div>
    )}
    </div>
    )}
    </>
  );
};

export default Shop;





