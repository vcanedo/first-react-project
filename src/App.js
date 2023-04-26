import React from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';


const App = () => {

  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/company">Company</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
