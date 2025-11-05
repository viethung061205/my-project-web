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

function ProductsMan() {
  const { id } = useParams();
  const userId = id || "1";

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
    fetch("http://localhost:5000/api/products/woman")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => {});
  }, []);

  const handleSelect = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? "" : value
    }));
  };

  const handlePriceSelect = (range) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: prev.priceRange === range ? null : range
    }));
  };

  const handleRatingFilter = () => {
    setFilters((prev) => ({
      ...prev,
      rating: prev.rating === 5 ? 0 : 5
    }));
  };

  const filteredProducts = products.filter((p) => {
    const matchType = !filters.types || p.type === filters.types;
    const matchColor = !filters.colors || p.color === filters.colors;
    const matchSize = !filters.sizes || p.size === filters.sizes;
    const matchPrice =
      !filters.priceRange ||
      (p.price >= filters.priceRange.min && p.price <= filters.priceRange.max);
    const matchRating = !filters.rating || (p.rating || 0) >= filters.rating;

    return matchType && matchColor && matchSize && matchPrice && matchRating;
  });

  return (
    <div className="p-product-container">
      <aside className="p-product-sidebar">
        <h2>Bộ lọc</h2>

        <FilterDropdown
          label="Danh mục"
          open={dropdownOpen.type}
          toggle={() => setDropdownOpen((p) => ({ ...p, type: !p.type }))}
          options={["Áo Hoodie Nam", "Áo Khoác Gió", "Áo Phao Nam"]}
          active={filters.types}
          onSelect={(v) => handleSelect("types", v)}
        />

        <FilterDropdown
          label="Màu sắc"
          open={dropdownOpen.color}
          toggle={() => setDropdownOpen((p) => ({ ...p, color: !p.color }))}
          options={["Đen", "Xám", "Đỏ", "Trắng", "Xanh", "Vàng"]}
          active={filters.colors}
          onSelect={(v) => handleSelect("colors", v)}
        />

        <FilterDropdown
          label="Kích thước"
          open={dropdownOpen.size}
          toggle={() => setDropdownOpen((p) => ({ ...p, size: !p.size }))}
          options={["M", "L", "XL"]}
          active={filters.sizes}
          onSelect={(v) => handleSelect("sizes", v)}
        />

        <FilterPriceDropdown
          open={dropdownOpen.price}
          toggle={() => setDropdownOpen((p) => ({ ...p, price: !p.price }))}
          ranges={priceRanges}
          active={filters.priceRange}
          onSelect={handlePriceSelect}
        />

        <button className="p-dropdown-toggle" onClick={handleRatingFilter}>
          ⭐ 5 sao trở lên
        </button>
      </aside>

      <main className="p-product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div className="p-product-card" key={p._id}>
              <img src={p.image || "/no-image.png"} alt={p.name} />

              <div className="p-product-name">{p.name}</div>
              <div className="p-product-info">{p.brand}</div>
              <div className="p-product-info text-warning">⭐ {p.rating || 0}</div>
              <div className="p-product-info text-success">
                {p.price.toLocaleString("vi-VN")} ₫
              </div>

              <button className="p-btn-addcart">
                <i className="bi bi-cart"></i> Add to cart
              </button>

              <Link to={`/products/man/${p._id}`} className="p-btn-view">
                <i className="bi bi-eye"></i> Xem chi tiết
              </Link>
            </div>
          ))
        ) : (
          <p>Không tìm thấy sản phẩm phù hợp.</p>
        )}
      </main>
    </div>
  );
}

const FilterDropdown = ({ label, open, toggle, options, active, onSelect }) => (
  <div className="p-filter-group">
    <button className="p-dropdown-toggle" onClick={toggle}>
      {label} <span>▼</span>
    </button>

    {open && (
      <div className="p-dropdown-menu no-checkbox">
        {options.map((item) => (
          <div
            key={item}
            className={`p-dropdown-option ${active === item ? "active" : ""}`}
            onClick={() => onSelect(item)}
          >
            {item}
          </div>
        ))}
      </div>
    )}
  </div>
);

const FilterPriceDropdown = ({ open, toggle, ranges, active, onSelect }) => (
  <div className="p-filter-group">
    <button className="p-dropdown-toggle" onClick={toggle}>
      Giá tiền <span>▼</span>
    </button>

    {open && (
      <div className="p-dropdown-menu no-checkbox">
        {ranges.map((r, i) => (
          <div
            key={i}
            className={`p-dropdown-option ${active === r ? "active" : ""}`}
            onClick={() => onSelect(r)}
          >
            {r.label}
          </div>
        ))}
      </div>
    )}
  </div>
);

export default ProductsMan;
