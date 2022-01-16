import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.scss";

// Components
import Nav from "./components/Nav/Nav";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Nav />
      <div className="">
        <Route exact={true} path="/" component={Home} />
        <Route exaxt path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
hydrate(
  <Router>
    <App />
  </Router>,
  rootElement
);
