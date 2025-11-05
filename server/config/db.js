const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
const dbName = "productdb";

async function db() {

  await client.connect(uri);
  console.log(`✅ kết nối MongoDB thành công với database ${dbName}`);
  return client.db(dbName);
}

module.exports = db;
