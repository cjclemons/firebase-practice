import React, { useState, useEffect } from "react";
import "./App.css";

import Nav from "./components/Nav";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
    </Router>
  );
}

export default App;
