import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import PageHeader from "../components/PageHeader";
import BookCard from "../components/BookCard";

const ToRead = () => {
  const { books } = useContext(BookContext);
  const booksToRead = books.filter((book) => book.toRead === true);

  return (
    <>
      <PageHeader
        pageTitle="Hi, Your to read list"
        pageSubtitle="books to read"
        pageSubtitleAmount={booksToRead.length}
      />

      <div className="collection">
        {books.map((book) => {
          if (book.toRead === true) {
            <BookCard key={book.id} book={book} />;
          }
        })}
      </div>
    </>
  );
};

export default ToRead;
