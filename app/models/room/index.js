// const { id } = require("apicache");
const { MongoClient, ObjectId } = require("mongodb");

// Connection URL
// const url = "mongodb://127.0.0.1:27017";
// const url = "mongodb://pzl-final-db-1:27017"; //with chmod
const url = "mongodb://admin:secret@pzl-final-db-1:27017";

const client = new MongoClient(url);

// Database Name
const dbName = "pzfinal";

async function fetchroom() {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  const collection = await db.collection("rooms").find({}).toArray();
  return collection;
}

async function getOneroom(id) {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  const collection = await db.collection("rooms").findOne({ _id: new ObjectId(id) });
  return collection;
}

async function createroom(data) {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  const collection = await db.collection("rooms").insertOne({ ...data, _id: new ObjectId(new Date().getTime()) });
  return collection;
}

async function updateroom(data, id) {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  const collection = await db.collection("rooms").updateOne({ _id: new ObjectId(id) }, { $set: data });
  return collection;
}

async function deleteroom(id) {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  const collection = await db.collection("rooms").deleteOne({ _id: new ObjectId(id) });
  return collection;
}

module.exports = {
  fetchroom,
  getOneroom,
  createroom,
  updateroom,
  deleteroom,
};
