const Book = require('../models/Book');

// Get all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Add a new book
exports.addBook = async (req, res) => {
    const { title, author, year } = req.body;

    try {
        const newBook = new Book({ title, author, year });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ message: 'Error adding book' });
    }
};
