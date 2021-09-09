import React, { createContext, useState } from "react";
import { initialState } from "./initialState";

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState(initialState);

  return (
    <BookContext.Provider value={{ books }}>{children}</BookContext.Provider>
  );
};

export default BookContextProvider;
