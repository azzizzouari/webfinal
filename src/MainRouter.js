import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page0 from "./Pages/Page0";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import NavBar from "./NavBar";
import Footer from "./footera";
import { searchContext } from "./contexts/searchContext";
import Cart from "./Pages/Cart";

export default function MainRouter() {
  const [searchInput, setsearchInput] = useState("")
  
  return (
    <div>
        <searchContext.Provider value={{searchInput,setsearchInput}}>
      <Router>

        <NavBar />
        {/* HEADER */}
        <Routes>
          <Route path="/" element={<Page0 />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
        </Routes>
        {/* FOOTER */}
        
        <Footer/>
      </Router>
        </searchContext.Provider>
    </div>
  );
}
