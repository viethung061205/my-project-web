const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

// Cấu hình EJS làm template engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Phục vụ các file tĩnh từ thư mục 'public'
app.use(express.static("public"));

const uri = "mongodb://127.0.0.1:27017"; // Local MongoDB
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    console.log("✅ Đã kết nối MongoDB");

    const db = client.db("demoDB");
    const productsCollection = db.collection("products");

    // --- Thêm dữ liệu mẫu (chỉ chạy 1 lần) ---
    await productsCollection.deleteMany({}); // Xóa dữ liệu cũ
    await productsCollection.insertMany([
      { name: "Áo Thun Basic", price: 250000, image: "https://via.placeholder.com/300x400.png?text=Ao+Thun" },
      { name: "Quần Jeans Slim-fit", price: 550000, image: "https://via.placeholder.com/300x400.png?text=Quan+Jeans" },
      { name: "Áo Sơ Mi Oxford", price: 450000, image: "https://via.placeholder.com/300x400.png?text=Ao+So+Mi" },
      { name: "Váy Hoa Vintage", price: 600000, image: "https://via.placeholder.com/300x400.png?text=Vay+Hoa" },
      { name: "Áo Khoác Bomber", price: 750000, image: "https://via.placeholder.com/300x400.png?text=Ao+Khoac" },
      { name: "Quần Short Kaki", price: 320000, image: "https://via.placeholder.com/300x400.png?text=Quan+Short" },
    ]);
    console.log("🛍️  Đã thêm dữ liệu sản phẩm mẫu.");

    // --- Tạo route (đường dẫn) cho trang chủ ---
    app.get("/", async (req, res) => {
      try {
        const products = await productsCollection.find().toArray();
        res.render("pages/index", {
          products: products
        });
      } catch (err) {
        console.error("❌ Lỗi khi lấy sản phẩm:", err);
        res.status(500).send("Lỗi Server");
      }
    });

    app.listen(port, () => {
      console.log(`🚀 Web server đang chạy tại http://localhost:${port}`);
    });

  } catch (err) {
    console.error("❌ Lỗi:", err);
    // Không đóng client ở đây để server tiếp tục chạy
  }
}

main().catch(console.error);

// Xử lý khi tắt server (Ctrl+C)
process.on('SIGINT', async () => {
  await client.close();
  console.log('\n✅ Đã ngắt kết nối MongoDB. Tạm biệt!');
  process.exit();
});
