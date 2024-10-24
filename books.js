const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// GET all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books); // Send the books as JSON
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books', error });
    }
});

module.exports = router;
