import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './components/Pages/Mainpage';
import FrontPage1 from './components/Frontpage/Template1/Frontpage1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/frontpage1" element={<FrontPage1/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
