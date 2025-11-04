import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./Products.css";

const priceRanges = [
  { label: "< 100.000đ", min: 0, max: 100000 },
  { label: "100.000đ - 200.000đ", min: 100000, max: 200000 },
  { label: "200.000đ - 300.000đ", min: 200000, max: 300000 },
  { label: "300.000đ - 400.000đ", min: 300000, max: 400000 },
  { label: "400.000đ - 500.000đ", min: 400000, max: 500000 },
  { label: "> 500.000đ", min: 500000, max: Infinity }
];

<<<<<<<< HEAD:client/src/components/products/Products.jsx
function Products() {
  const { id } = useParams(); // userId từ URL
  const userId = id || "1";

========
const ProductsMan = () => {
>>>>>>>> 0ceaabc2ba0852df604e5ac9ef596095fcbd582f:client/src/pages/Products-man.jsx
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    types: "",
    colors: "",
    sizes: "",
    priceRange: null,
    rating: 0
  });
  const [dropdownOpen, setDropdownOpen] = useState({
    type: false,
    color: false,
    size: false,
    price: false
  });

  useEffect(() => {
<<<<<<<< HEAD:client/src/components/products/Products.jsx
    fetch("http://localhost:5000/api/products/")
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((data) => {
        console.log("products_data=", data.products);
        setProducts(data.products);
      })
========
    fetch("http://localhost:5000/api/products/man")
      .then((res) => res.json())
      .then((data) => setProducts(data))
>>>>>>>> 0ceaabc2ba0852df604e5ac9ef596095fcbd582f:client/src/pages/Products-man.jsx
      .catch((err) => console.error("API error:", err));
  }, []);

  const handleSelect = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category] === value ? "" : value
    }));
  };

  const handlePriceSelect = (range) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: prev.priceRange === range ? null : range
    }));
  };

  const handleRatingFilter = (rating) => {
    setFilters((prev) => ({
      ...prev,
      rating: prev.rating === rating ? 0 : rating
    }));
  };

  const filteredProducts = products.filter((p) => {
    const matchType = !filters.types || filters.types === p.type;
    const matchColor = !filters.colors || filters.colors === p.color;
    const matchSize = !filters.sizes || filters.sizes === p.size;
    const matchPrice =
      !filters.priceRange ||
      (p.price >= filters.priceRange.min && p.price <= filters.priceRange.max);
    const matchRating = !filters.rating || p.rating >= filters.rating;

    return matchType && matchColor && matchSize && matchPrice && matchRating;
  });

  return (
    <div className="p-product-container">
      <aside className="p-product-sidebar">
        <h2>Bộ lọc</h2>

        <div className="p-filter-group">
          <button
            className="p-dropdown-toggle"
            onClick={() =>
              setDropdownOpen((prev) => ({ ...prev, type: !prev.type }))
            }
          >
            Danh mục <span className="p-arrow-down">▼</span>
          </button>
          {dropdownOpen.type && (
            <div className="p-dropdown-menu no-checkbox">
              {["Áo Hoodie Nam", "Áo Khoác Gió", "Áo Phao Nam"].map((type) => (
                <div
                  key={type}
                  className={`p-dropdown-option ${filters.types === type ? "active" : ""}`}
                  onClick={() => handleSelect("types", type)}
                >
                  {type}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-filter-group">
          <button
            className="p-dropdown-toggle"
            onClick={() =>
              setDropdownOpen((prev) => ({ ...prev, color: !prev.color }))
            }
          >
            Màu sắc <span className="p-arrow-down">▼</span>
          </button>
          {dropdownOpen.color && (
            <div className="p-dropdown-menu no-checkbox">
              {["Đen", "Xám", "Đỏ", "Trắng", "Xanh", "Vàng"].map((color) => (
                <div
                  key={color}
                  className={`p-dropdown-option ${filters.colors === color ? "active" : ""}`}
                  onClick={() => handleSelect("colors", color)}
                >
                  {color}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-filter-group">
          <button
            className="p-dropdown-toggle"
            onClick={() =>
              setDropdownOpen((prev) => ({ ...prev, size: !prev.size }))
            }
          >
            Kích thước <span className="p-arrow-down">▼</span>
          </button>
          {dropdownOpen.size && (
            <div className="p-dropdown-menu no-checkbox">
              {["M", "L", "XL"].map((size) => (
                <div
                  key={size}
                  className={`p-dropdown-option ${filters.sizes === size ? "active" : ""}`}
                  onClick={() => handleSelect("sizes", size)}
                >
                  {size}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-filter-group">
          <button
            className="p-dropdown-toggle"
            onClick={() =>
              setDropdownOpen((prev) => ({ ...prev, price: !prev.price }))
            }
          >
            Giá tiền <span className="p-arrow-down">▼</span>
          </button>
          {dropdownOpen.price && (
            <div className="p-dropdown-menu no-checkbox">
              {priceRanges.map((range, i) => (
                <div
                  key={i}
                  className={`p-dropdown-option ${filters.priceRange === range ? "active" : ""}`}
                  onClick={() => handlePriceSelect(range)}
                >
                  {range.label}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-filter-group">
          <button
            className="p-dropdown-toggle"
            onClick={() => handleRatingFilter(5)}
          >
            ⭐ 5 sao trở lên
          </button>
        </div>
      </aside>

      <main className="p-product-list">
        {filteredProducts.length === 0 ? (
          <p>Không tìm thấy sản phẩm phù hợp.</p>
        ) : (
          filteredProducts.map((p, idx) => (
            <div className="p-product-card" key={idx}>
              <img
                src={p.images && p.images[0] ? p.images[0] : "/no-image.png"}
                alt={p.name}
              />
              <div className="p-product-name">{p.name}</div>
              <div className="p-product-info">{p.brand}</div>
              <div className="p-product-info text-warning">
                ⭐ {p.rating || 0}
              </div>
              <div className="p-product-info text-success">
                {p.price.toLocaleString("vi-VN")} ₫
              </div>

              <button className="p-btn-addcart">
                <i className="bi bi-cart"></i> Add to cart
              </button>

              <Link
                to={`/home/${userId}/products/${p._id}`}
                className="p-btn-view"
              >
                <i className="bi bi-eye"></i> Xem chi tiết
              </Link>
            </div>
          ))
        )}
      </main>
    </div>
  );
}

<<<<<<<< HEAD:client/src/components/products/Products.jsx
export default Products;
========
export default ProductsMan;
>>>>>>>> 0ceaabc2ba0852df604e5ac9ef596095fcbd582f:client/src/pages/Products-man.jsx
