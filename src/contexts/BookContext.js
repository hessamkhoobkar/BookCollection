import React, { createContext, useState } from "react";
import { initialState } from "./initialState";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState(initialState);

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const changeReadState = (id) => {
    setBooks(
      books.map((book) => {
        if (book.id === id) {
          return { ...book, toRead: !book.toRead };
        }
        return book;
      })
    );
  };

  return (
    <BookContext.Provider value={{ books, removeBook, changeReadState }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
