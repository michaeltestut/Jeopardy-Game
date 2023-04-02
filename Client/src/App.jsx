import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Jeopardy from './pages/Jeopardy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/jeopardy" element={<Jeopardy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
