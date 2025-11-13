import React from "react";
import { useParams ,useLocation } from "react-router-dom";
import "./Products.css";

function DetailF(props) {
  const { pid } = useParams();
  const location = useLocation();
  const user_id = location.state?.user_id || JSON.parse(localStorage.getItem("user"))?.id;

  console.log("🔹 DetailF - pid:", pid, "user_id:", user_id); // ✅ kiểm tra ở đây

  if (!pid) return <p>Sản phẩm không tồn tại</p>;
  return <Detail {...props} id={pid} user_id={user_id} />;
}

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_data: {},
      quantity: 1,
      activeTab: "description",
      selectedImage: null,
      relatedProducts: [],
      cartCount: 0,
    };
  }

  componentDidMount() {
    console.log("🔹 Detail componentDidMount - user_id:", this.props.user_id);
    this.getDetailProduct(this.props.id);
    this.loadCartCount();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.getDetailProduct(this.props.id);
    }
  }

  getDetailProduct = (id) => {
    const url = `http://localhost:5000/api/products/${id}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then((data) => {
        const product = data.products;
        const imagesArray = product.images?.length ? product.images : product.image ? [product.image] : [];
        this.setState({
          product_data: { ...product, images: imagesArray },
          selectedImage: imagesArray[0] || "",
          quantity: 1,
        });
        this.getRelatedProducts(product.type);
      })
      .catch((err) => console.error("💥 Lỗi khi lấy chi tiết:", err));
  };


  getRelatedProducts = (type) => {
    if (!type) return;
    const url = `http://localhost:5000/api/products/byType/${type}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ relatedProducts: data.products || [] });
      })
      .catch((error) => console.error("💥 Lỗi khi lấy sản phẩm liên quan:", error));
  };

  onChangeTabChange = (tab) => this.setState({ activeTab: tab });

  onChangeImageSelect = (img) => this.setState({ selectedImage: img });

  onChangeQuantity = (e) => {
    const value = Number(e.target.value);
    if (value > 0) this.setState({ quantity: value });
  };

  onClickBuyNow = () => alert(`Đặt mua ${this.state.quantity} sản phẩm thành công!`);

    // 🔹 Load số lượng tổng trong giỏ hàng khi mount
   loadCartCount = async () => {
    const { user_id } = this.props; // 🔹 Lấy từ props

      try {
        const res = await fetch(`http://localhost:5000/api/products/cart/${user_id}`);
        const data = await res.json();
        if (data.cart) {
          const total = data.cart.items.reduce((sum, item) => sum + item.quantity, 0);
          this.setState({ cartCount: total });
        }
      } catch (err) {
        console.error(err);
      }
    };
  // 🔹 Thêm vào giỏ hàng
  onClickAddToCart = async () => {
    const { user_id } = this.props; // 🔹 Lấy từ props
    const { product_data, quantity, cartCount } = this.state; // ✅ lấy đúng từ state

    console.log("🔹 Thêm giỏ hàng - user_id:", user_id, "product:", product_data, "quantity:", quantity);

    alert(`Đã thêm ${this.state.quantity} sản phẩm vào giỏ hàng!`);
    const product = {
      product_id: this.state.product_data._id,
      name: this.state.product_data.name,
      price: this.state.product_data.price,
      image: this.state.product_data.image,
      quantity: this.state.quantity,
    };

    try {
      const res = await fetch("http://localhost:5000/api/products/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id, product }),
      });
      const data = await res.json();
      if (data.message) {
        alert(data.message);
        // Cập nhật cartCount hiển thị
        this.setState({ cartCount: cartCount + quantity });
      }
    } catch (err) {
      console.error(err);
      alert("💥 Lỗi khi thêm vào giỏ hàng");
    }
  };
  onClickSelectedId = (id) => window.location.href = `/detail/${id}`;

  render() {
    const { product_data, selectedImage, quantity, activeTab, relatedProducts } = this.state;

    return (
      <div className="product-detail-container">
        <h3 className="product-detail-title">{product_data.name}</h3>

        <div className="product-main">
          {/* IMAGE */}
          <div className="product-image">
            {selectedImage && (
              <img src={selectedImage} alt={product_data.name} className="main-image" />
            )}

            <div className="thumbnail-list">
              {product_data.images &&
                product_data.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`thumb-${idx}`}
                    className={selectedImage === img ? "active" : ""}
                    onClick={() => this.onChangeImageSelect(img)}
                  />
                ))}
            </div>
          </div>

          {/* INFO */}
          <div className="product-info">
            <p>
              <span className="badge bg-warning text-dark me-2">⭐ {product_data.rating || "5.0"}</span>
              {product_data.description}
            </p>

            <div className="d-flex align-items-center mb-3">
              <label className="me-2 fw-semibold">Số lượng:</label>
              <input
                type="number"
                className="quantity-input"
                value={quantity}
                min="1"
                onChange={this.onChangeQuantity}
              />
            </div>

            <p className="price">
              {product_data.price ? `${product_data.price.toLocaleString("vi-VN")}₫` : "0₫"}
            </p>

            <div className="d-flex gap-2">
              <button className="btn-buy" onClick={this.onClickBuyNow}>Mua ngay</button>
              <button className="btn-cart" onClick={this.onClickAddToCart}>🛒 Thêm vào giỏ</button>
            </div>
          </div>
        </div>

        {/* TAB */}
        <ul className="nav-tabs">
          <li><button className={activeTab === "description" ? "active" : ""} onClick={() => this.onChangeTabChange("description")}>Mô tả</button></li>
          <li><button className={activeTab === "review" ? "active" : ""} onClick={() => this.onChangeTabChange("review")}>Đánh giá (0)</button></li>
          <li><button className={activeTab === "related" ? "active" : ""} onClick={() => this.onChangeTabChange("related")}>Sản phẩm liên quan</button></li>
        </ul>

        <div className="border border-top-0 p-3">
          {activeTab === "description" && (
            <div>
              <h5>Tổng quan</h5>
              <p>{product_data.description}</p>
              <p><strong>Thương hiệu:</strong> {product_data.brand}</p>
            </div>
          )}

          {activeTab === "review" && <p>Chưa có đánh giá nào.</p>}

          {activeTab === "related" && (
            <div className="related-products">
              {relatedProducts.length === 0 && <p>Không có sản phẩm liên quan.</p>}
              {relatedProducts.map((item) => (
                <div key={item._id} className="card" onClick={() => this.onClickSelectedId(item._id)}>
                  <img src={item.image} alt={item.name} />
                  <div className="card-body text-center">
                    <h6>{item.name}</h6>
                    <p>{item.price.toLocaleString("vi-VN")}₫</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default DetailF;
