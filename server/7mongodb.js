const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017"; // Local MongoDB
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("✅ Đã kết nối MongoDB");

    const db = client.db("demoDB");
    const collection = db.collection("students");
    
    await collection.deleteMany({});
    await collection.insertOne({ name: "Việt Hùng", age: 20 });
    const result = await collection.find().toArray();
    console.log("📄 Dữ liệu trong MongoDB:", result);
  } catch (err) {
    console.error("❌ Lỗi:", err);
  } finally {
    await client.close();
  }
}

run();
