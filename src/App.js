import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Careers from "./pages/Careers";
import Footer from "./component/Footer";
function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="careers" element={<Careers />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
