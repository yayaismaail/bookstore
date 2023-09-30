import React from 'react';
import BookList from './BookList';

const Books = () => {
  const books = [
    { title: '1000 Spatans', author: 'Romans', id: 1 },
    { title: '2000 Spatans', author: 'Romans', id: 2 },
    { title: '3000 Spatans', author: 'Romans', id: 3 },
  ];
  return (
    <>
      <h1 className="title">Book Lists</h1>
      <div className="books">
        {books.map((book) => (
          <ul className="booklists" key={book.title}>
            <li className="lists">{book.title}</li>
            <li className="lists">{book.author}</li>
            <button type="button" className="remove-btn">Delete</button>
          </ul>
        ))}
      </div>
      <div className="book-form">
        <BookList />
      </div>
    </>
  );
};

export default Books;
