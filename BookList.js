// src/components/BookList.js

import React from 'react';

const BookList = ({ books }) => {
    return (
        <div className="book-list">
            {books.length === 0 ? (
                <p>No books added yet.</p>
            ) : (
                books.map((book, index) => (
                    <div className="book-card" key={index}>
                        <h3>{book.title}</h3>
                        <p><strong>Author:</strong> {book.author}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default BookList;
