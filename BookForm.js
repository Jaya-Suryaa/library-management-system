import React, { useState } from 'react';

const BookForm = ({ onAddBook }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { title, author }); // Log to verify

        if (title && author) {
            onAddBook({ title, author });
            setTitle('');
            setAuthor('');
        } else {
            alert('Please provide both title and author');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Book Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <button type="submit">Add Book</button>
        </form>
    );
};

export default BookForm;
