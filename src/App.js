import React from 'react';
import './App.css';
import Markets from './components/Markets';
import Prices from './components/Prices';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home';

function App() {
  
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/markets" element={<Markets />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
