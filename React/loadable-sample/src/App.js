import React, { Component } from "react";
import { Route, Link, Routes } from "react-router-dom";
import { About, Home } from "./pages";

class App extends Component {
  handleMouseOver = () => {
    About.preload();
  };
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about" onMouseOver={this.handleMouseOver}>
              About
            </Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/about" Component={About} />
        </Routes>
      </div>
    );
  }
}

export default App;
