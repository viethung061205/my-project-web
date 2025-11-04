import React from "react";
import { useParams } from "react-router-dom";
import "./Products.css";
// 🧩 Component trung gian dùng hook để truyền param vào class component
function DetailF(props) {
  const { pid } = useParams(); // lấy id sản phẩm từ URL
  return <Detail {...props} id={pid} />;
}

// 🧩 Class component chính
class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_data: {},       // Dữ liệu chi tiết sản phẩm
      quantity: 1,            // Số lượng
      activeTab: "description", // Tab đang chọn
      selectedImage: null,    // Ảnh đang hiển thị chính
      relatedProducts: [],    // Danh sách sản phẩm liên quan
    };
  }

  // Gọi API khi component mount lần đầu
  componentDidMount() {
    const { id } = this.props;
    this.getDetailProduct(id);
  }

  // Khi id thay đổi (chuyển sang sản phẩm khác)
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.getDetailProduct(this.props.id);
    }
  }

  // Hàm lấy dữ liệu sản phẩm
  getDetailProduct = (id) => {
    const url = `http://localhost:5000/api/products/${id}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then((data) => {
        const product = data.products;

        this.setState({
          product_data: product,
          selectedImage: product.images?.[0] || "",
          quantity: 1,
        });

        console.log("🟢 Product:", product);

        // 🔹 Gọi thêm sản phẩm liên quan
        this.getRelatedProducts(product.type);
      })
      .catch((error) => console.error("💥 Lỗi khi lấy chi tiết:", error));
  };

  // Hàm lấy sản phẩm liên quan (ví dụ: cùng loại)
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

  // Thay đổi tab
  onChangeTabChange = (tab) => {
    this.setState({ activeTab: tab });
  };

  // Chọn ảnh khác
  onChangeImageSelect = (img) => {
    this.setState({ selectedImage: img });
  };

  // Thay đổi số lượng
  onChangeQuantity = (e) => {
    const value = Number(e.target.value);
    if (value > 0) {
      this.setState({ quantity: value });
    }
  };

  // Nút mua ngay
  onClickBuyNow = () => {
    alert(`Đặt mua ${this.state.quantity} sản phẩm thành công!`);
  };

  // Nút thêm giỏ hàng
  onClickAddToCart = () => {
    alert(`Đã thêm ${this.state.quantity} sản phẩm vào giỏ hàng!`);
  };

  // Khi click sản phẩm liên quan
  onClickSelectedId = (id) => {
    window.location.href = `/detail/${id}`;
  };

  render() {
    const { product_data, selectedImage, quantity, activeTab, relatedProducts } = this.state;

    return (
      <div className="product-detail-container">
        <h3 className="fw-bold mb-4">{product_data.name}</h3>

        <div className="row">
          {/* IMAGE sản phẩm */}
          <div className="col-md-6">
            <div className="text-center">
              <img
                src={selectedImage}
                alt={product_data.name}
                className="img-fluid rounded mb-3"
                style={{ maxHeight: "240px", objectFit: "contain" }}
              />
            </div>

            <div className="d-flex justify-content-center gap-2">
              {product_data.images &&
                product_data.images
                  .filter((img) => img && img.trim() !== "")
                  .map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`thumb-${idx}`}
                      className={`img-thumbnail ${
                        selectedImage === img ? "border-primary" : ""
                      }`}
                      style={{
                        width: "80px",
                        height: "80px",
                        cursor: "pointer",
                        objectFit: "contain",
                      }}
                      onClick={() => this.onChangeImageSelect(img)}
                    />
                  ))}
            </div>
          </div>

          {/* INFO sản phẩm */}
          <div className="col-md-6">
            <div className="mb-3">
              <span className="badge bg-warning text-dark me-2">
                ⭐ {product_data.rating || "5.0"}
              </span>
              <span>{product_data.description}</span>
            </div>

            <div className="d-flex align-items-center mb-3">
              <label className="me-2 fw-semibold">Số lượng:</label>
              <input
                type="number"
                className="form-control"
                value={quantity}
                min="1"
                style={{ width: "80px" }}
                onChange={this.onChangeQuantity}
              />
            </div>

            <h4 className="fw-bold text-success mb-4">
              {product_data.price
                ? `${product_data.price.toLocaleString("vi-VN")}₫`
                : "0₫"}
            </h4>

            <div className="d-flex gap-2">
              <button className="btn btn-outline-primary" onClick={this.onClickBuyNow}>
                Mua ngay
              </button>
              <button className="btn btn-primary" onClick={this.onClickAddToCart}>
                🛒 Thêm vào giỏ
              </button>
            </div>
          </div>
        </div>

        {/* TAB */}
        <ul className="nav nav-tabs mt-5">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "description" ? "active" : ""}`}
              onClick={() => this.onChangeTabChange("description")}
            >
              Mô tả
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "review" ? "active" : ""}`}
              onClick={() => this.onChangeTabChange("review")}
            >
              Đánh giá (0)
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "related" ? "active" : ""}`}
              onClick={() => this.onChangeTabChange("related")}
            >
              Sản phẩm liên quan
            </button>
          </li>
        </ul>

        <div className="border border-top-0 p-3">
          {activeTab === "description" && (
            <div>
              <h5>Tổng quan</h5>
              <p>{product_data.description}</p>
              <p>
                <strong>Thương hiệu:</strong> {product_data.brand}
              </p>
            </div>
          )}

          {activeTab === "review" && <p>Chưa có đánh giá nào.</p>}

          {activeTab === "related" && (
            <div className="row">
              {relatedProducts.length === 0 && <p>Không có sản phẩm liên quan.</p>}
              {relatedProducts.map((item) => (
                <div key={item._id} className="col-md-3 mb-3">
                  <div
                    className="card h-100"
                    onClick={() => this.onClickSelectedId(item._id)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="card-img-top"
                      style={{ height: "120px", objectFit: "contain" }}
                    />
                    <div className="card-body text-center">
                      <h6>{item.name}</h6>
                      <p className="text-success fw-bold">
                        {item.price.toLocaleString("vi-VN")}₫
                      </p>
                    </div>
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
