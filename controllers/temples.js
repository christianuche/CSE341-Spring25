const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

// GET all contacts
const getAllTemples = async (req, res) => {
  try {
    const db = mongodb.getDb();
    const result = await db.collection("temples").find().toArray();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET one contact
const getSingleTemple = async (req, res) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const db = mongodb.getDb();
    const result = await db.collection("temples").findOne({ _id: contactId });
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllTemples, getSingleTemple };
