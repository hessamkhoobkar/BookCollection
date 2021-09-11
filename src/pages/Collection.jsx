import React, { useContext } from "react";
import BookCard from "../components/BookCard";
import PageHeader from "../components/PageHeader";
import { BookContext } from "../contexts/BookContext";
import "./collection.css";

const Collection = () => {
  const { books } = useContext(BookContext);

  return (
    <>
      <PageHeader
        pageTitle="Hi, Welcome to your collection"
        pageSubtitle="books in you collection"
        pageSubtitleAmount={books.length}
        pageAction="Add book"
      />

      <div className="collection">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </>
  );
};

export default Collection;
