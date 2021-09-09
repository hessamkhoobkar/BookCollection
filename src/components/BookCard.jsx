import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-cover">
        <img className="cover-img" src={book.cover} alt={book.title} />
      </div>
      <div className="book-details">
        <h2 className="book-title">{book.title}</h2>
        <span className="book-author">{book.author}</span>
      </div>
    </div>
  );
};

export default BookCard;
