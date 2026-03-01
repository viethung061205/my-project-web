import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ProductDetail.css";
import productData from "../data/productData";

function addToCartLocal(product, qty) {
  const saved = localStorage.getItem("cartItems");
  const cart = saved ? JSON.parse(saved) : [];

  const exists = cart.find((it) => it.id === product.id);
  if (exists) {
    exists.quantity += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      available: product.available,
      image: product.image || product.images?.[0] || "",
      quantity: qty,
    });
  }

  localStorage.setItem("cartItems", JSON.stringify(cart));
  // notify Shop page (same tab)
  window.dispatchEvent(new Event("cartUpdated"));
}

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = useMemo(
    () => productData.find((p) => String(p.id) === String(productId)),
    [productId]
  );

  const [activeImg, setActiveImg] = useState("");
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (!product) return;
    setActiveImg(product.images?.[0] || product.image || "");
    setQty(1);
  }, [product]);

  const related = useMemo(() => {
    if (!product) return [];
    return productData
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="pd-page">
        <div className="pd-card pd-notfound">
          <h2>Product not found</h2>
          <button className="pd-btn" onClick={() => navigate("/shop")}>Back to Shop</button>
        </div>
      </div>
    );
  }

  const stockLeft = Math.max(0, product.available ?? 0);
  const canAdd = stockLeft > 0;

  const handleAdd = () => {
    if (!canAdd) return;
    addToCartLocal(product, qty);
    alert("Added to bag!");
  };

  return (
    <div className="pd-page">
      <div className="pd-breadcrumb">
        <Link to="/shop">Shop</Link> <span>/</span> <span>{product.name}</span>
      </div>

      <div className="pd-card">
        <div className="pd-left">
          <div className="pd-main-img">
            {activeImg ? <img src={activeImg} alt={product.name} /> : null}
          </div>

          <div className="pd-thumbs">
            {(product.images || [])
              .filter(Boolean)
              .map((url) => (
                <button
                  key={url}
                  className={`pd-thumb ${url === activeImg ? "active" : ""}`}
                  onClick={() => setActiveImg(url)}
                  type="button"
                >
                  <img src={url} alt="thumb" />
                </button>
              ))}
          </div>
        </div>

        <div className="pd-right">
          <h1 className="pd-title">{product.name}</h1>

          <p className="pd-meta">
            <b>Category:</b> {product.category || "—"}
          </p>
          <p className="pd-meta">
            <b>Available:</b> {stockLeft}
          </p>

          <div className="pd-price">${product.price}</div>

          <div className="pd-qty">
            <button
              className="pd-qty-btn"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              type="button"
            >
              -
            </button>
            <span className="pd-qty-value">{qty}</span>
            <button
              className="pd-qty-btn"
              onClick={() =>
                setQty((q) => (stockLeft ? Math.min(stockLeft, q + 1) : q + 1))
              }
              type="button"
              disabled={!canAdd}
            >
              +
            </button>
          </div>

          <button className="pd-btn" onClick={handleAdd} disabled={!canAdd}>
            {canAdd ? "Add to bag" : "Out of stock"}
          </button>

          <div className="pd-desc">
            <h3>Description</h3>
            <p>{product.description || "No description yet."}</p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="pd-related">
          <h2>Related products</h2>
          <div className="pd-related-grid">
            {related.map((p) => (
              <Link key={p.id} to={`/shop/${p.id}`} className="pd-related-card">
                <img src={p.image || p.images?.[0]} alt={p.name} />
                <div className="pd-related-name">{p.name}</div>
                <div className="pd-related-price">${p.price}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

