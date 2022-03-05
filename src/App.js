import React from 'react';

import { Routes, Route } from "react-router-dom";

import StartingPage from './pages/StartingPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from  './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<StartingPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;