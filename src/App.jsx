import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './Pages/Mainpage';
import FrontPage1 from './Frontpages/template1/Frontpage1';
import FrontPage2 from './Frontpages/template2/Frontpage2';
import FrontPage2Home from './Frontpages/template2/Home';
import FrontPage2Shop from './Frontpages/template2/Shop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/frontpage1" element={<FrontPage1/>} />
          <Route path="/frontpage2/home" element={<FrontPage2Home/>} />
          <Route path="/frontpage2/shop" element={<FrontPage2Shop/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
