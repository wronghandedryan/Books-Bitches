const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addedBookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

const AddedBook = mongoose.model("AddedBook", addedBookSchema);

module.exports = AddedBook;
