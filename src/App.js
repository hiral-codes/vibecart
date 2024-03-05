import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Men from "./components/MensProduct";
import Woman from "./components/Women";
import Beauty from "./components/Beauty"
import Electronics from "./components/Electronics";
import Profile from "./components/Profile";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/men" element={<Men />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
