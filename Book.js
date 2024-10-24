const mongoose = require('mongoose');

// Define the book schema
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true },
});

// Create the model
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
