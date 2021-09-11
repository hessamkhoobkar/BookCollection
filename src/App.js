import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookContextProvider from "./contexts/BookContext";
import AddBook from "./pages/AddBook";
import ToRead from "./pages/ToRead";
import Collection from "./pages/Collection";
import Header from "./components/Header";
import "./App.css";

function App() {
  document.body.classList.add("dark-ui");
  return (
    <Router>
      <BookContextProvider>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/addbook">
              <AddBook />
            </Route>
            <Route path="/to-read">
              <ToRead />
            </Route>
            <Route exact path="/">
              <Collection />
            </Route>
          </Switch>
        </div>
      </BookContextProvider>
    </Router>
  );
}

export default App;
