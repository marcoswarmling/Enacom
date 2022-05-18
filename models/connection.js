const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const DB_NAME = "EnaFood";

let db = null;

const connection = () =>
  db
    ? Promise.resolve(db)
    : MongoClient.connect(url, OPTIONS).then((conn) => {
        db = conn.db(DB_NAME);
        return db;
      });

module.exports = { connection };
