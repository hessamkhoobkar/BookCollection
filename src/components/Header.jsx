import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";
import "./header.css";

const Header = () => {
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
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/to-read">
                To Read List
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
      <div className="books-state"></div>
    </header>
  );
};

export default Header;
