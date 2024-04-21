import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/Homepage';
import FrontPage1 from './Templates/template1/Frontpage1';
import FrontPage2 from './Templates/template2/Frontpage2';
import FrontPage3 from './Templates/template3/Frontpage3';
import FrontPage4 from './Templates/template4/Frontpage4';
import FrontPage5 from './Templates/template5/Frontpage5';
import FrontPage6 from './Templates/template6/Frontpage6';
import Common from './Common/Common';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/common" element={<Common/>} />
          <Route path="/frontpage1" element={<FrontPage1/>} />
          <Route path="/frontpage2" element={<FrontPage2/>} />
          <Route path="/frontpage3" element={<FrontPage3/>} />
          <Route path="/frontpage4" element={<FrontPage4/>} />
          <Route path="/frontpage5" element={<FrontPage5/>} />
          <Route path="/frontpage6" element={<FrontPage6/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
