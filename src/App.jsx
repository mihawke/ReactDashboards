import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './Pages/Mainpage';
import FrontPage1 from './Frontpages/template1/Frontpage1';
import FrontPage2 from './Frontpages/template2/Frontpage2';
import FrontPage3 from './Frontpages/template3/Frontpage3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/frontpage1" element={<FrontPage1/>} />
          <Route path="/frontpage2" element={<FrontPage2/>} />
          <Route path="/frontpage3" element={<FrontPage3/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
