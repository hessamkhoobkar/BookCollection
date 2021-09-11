import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { BookContext } from "../contexts/BookContext";
import logo from "../logo.png";
import "./header.css";

const Header = () => {
  const { books } = useContext(BookContext);
  const booksToRead = books.filter((book) => book.toRead === true);

  const [theme, setTheme] = useState("dark");

  const handleChange = (event) => {
    setTheme(event.target.value);

    switch (event.target.value) {
      case "light":
        document.body.className = "";
        document.body.classList.add("light-ui");
        break;
      case "dark":
        document.body.className = "";
        document.body.classList.add("dark-ui");
        break;
      case "blue-light":
        document.body.className = "";
        document.body.classList.add("blue-light-ui");
        break;
      case "blue-dark":
        document.body.className = "";
        document.body.classList.add("blue-dark-ui");
        break;

      default:
        document.body.className = "";
        document.body.classList.add("dark-ui");
        break;
    }
  };

  return (
    <header className="header">
      <div className="navbar">
        <div className="app-brand">
          <img className="brand-logo" src={logo} alt="Logo" />
        </div>
        <nav>
          <ul className="unordered-list">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">
                Collection
                <span className="badge">{books.length}</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/to-read">
                To Read List
                <span className="badge">{booksToRead.length}</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addbook">
                Add Books
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="theme-state">
        <select
          className="theme-state-select"
          onChange={handleChange}
          value={theme}
        >
          <option value="light">Light UI</option>
          <option value="dark">Dark UI</option>
          <option value="blue-light">Light Blue UI</option>
          <option value="blue-dark">Dark Blue UI</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
