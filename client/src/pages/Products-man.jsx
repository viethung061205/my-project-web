import React, { useState, useEffect } from "react";
import "./Products.css";

const priceRanges = [
  { label: "< 100.000đ", min: 0, max: 100000 },
  { label: "100.000đ - 200.000đ", min: 100000, max: 200000 },
  { label: "200.000đ - 300.000đ", min: 200000, max: 300000 },
  { label: "300.000đ - 400.000đ", min: 300000, max: 400000 },
  { label: "400.000đ - 500.000đ", min: 400000, max: 500000 },
  { label: "> 500.000đ", min: 500000, max: Infinity }
];

const ProductsMan = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    types: "",
    colors: "",
    sizes: "",
    priceRange: null
  });
  const [dropdownOpen, setDropdownOpen] = useState({
    type: false,
    color: false,
    size: false,
    price: false
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/products/man")
      .then((res) => res.json())
      .then((data) => setProducts(data))
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

  const filteredProducts = products.filter((p) => {
    const matchType = !filters.types || filters.types === p.type;
    const matchColor = !filters.colors || filters.colors === p.color;
    const matchSize = !filters.sizes || filters.sizes === p.size;
    const matchPrice =
      !filters.priceRange ||
      (p.price >= filters.priceRange.min && p.price <= filters.priceRange.max);
    return matchType && matchColor && matchSize && matchPrice;
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
                  className={`p-dropdown-option ${
                    filters.priceRange === range ? "active" : ""
                  }`}
                  onClick={() => handlePriceSelect(range)}
                >
                  {range.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </aside>

      <main className="p-product-list">
        {filteredProducts.length === 0 ? (
          <p>Không tìm thấy sản phẩm phù hợp.</p>
        ) : (
          filteredProducts.map((p, idx) => (
            <div className="p-product-card" key={idx}>
              <img src={p.image} alt={p.name} />
              <div className="p-product-name">{p.name}</div>
              <div className="p-product-info">{p.type} • {p.color} • {p.size}</div>
              <div className="p-product-info">{p.price.toLocaleString("vi-VN")}đ</div>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default ProductsMan;
