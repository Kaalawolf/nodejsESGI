const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

(async function() {
  // Connection URL
  const url = 'mongodb://localhost:27017/myproject';
  // Database Name
  const dbName = 'myproject';
  const client = new MongoClient(url);

  try {
    // Use connect method to connect to the Server
    await client.connect();
    console.log("Connected correctly to server");

    const db = client.db(dbName);
    const col = db.collection('dates');

    const r = await col.insertMany([{ date: new Date() }]);

    const docs = await col.find({}).toArray();
    console.log(docs);
  } catch (err) {
    console.log(err.stack);
  }

  client.close();
})();