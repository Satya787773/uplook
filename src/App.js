import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Careers from "./pages/Careers";
import Footer from "./component/Footer";
function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <>
      <BrowserRouter>
      <Header />
      <h1>{message}</h1>
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
