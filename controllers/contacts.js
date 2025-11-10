const mongodb = require("../data/database");
const ObjectId = require("mongodb").ObjectId;

// GET all contacts
const getAll = async (req, res) => {
  try {
    const db = mongodb.getDb();
    const result = await db.collection("contacts").find().toArray();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET one contact
const getSingle = async (req, res) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const db = mongodb.getDb();
    const result = await db.collection("contacts").findOne({ _id: contactId });
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// // Create a new contact
// const createContact = async (req, res) => {
//   // Implementation for creating a contact
// };

// // Update an existing contact
// const updateContact = async (req, res) => {
//   // Implementation for updating a contact
// };

// // Delete a contact
// const deleteContact = async (req, res) => {
//   // Implementation for deleting a contact
// };

module.exports = { 
  getAll, 
  getSingle,
  // createContact,
  // updateContact,
  // deleteContact 
};
