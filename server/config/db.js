// server/config/db.js
const { MongoClient } = require('mongodb');
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);


async function connectDB () {
    await client.connect(uri);
    console.log('✅ kết nối MongoDB thành công với database "productdb"');
    return client.db('productdb');
};

module.exports = connectDB;
