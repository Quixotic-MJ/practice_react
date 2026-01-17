import "./bootstrap.js";
import "../css/app.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sample from "../pages/sample.jsx";
import Login from "../pages/login.jsx";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import About from "../pages/About.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/" element={<Home />} />
                <Route path="/sample" element={<Sample />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

const container = document.getElementById("app");
createRoot(container).render(<App />);
