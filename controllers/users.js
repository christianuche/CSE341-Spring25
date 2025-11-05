const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

// Get all users
const getAll = async (req, res) => {
  try {
    const db = mongodb.getDb(); // ✅ no .db() again
    const result = await db.collection("users").find();
    const users = await result.toArray();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single user by ID
const getSingle = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const db = mongodb.getDb(); // ✅ no .db() again
    const result = await db.collection("users").find({ _id: userId });
    const users = await result.toArray();
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(users, null, 2));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getSingle,
};
