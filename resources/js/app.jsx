import './bootstrap.js';
// import '../css/app.css'; uncomment if you want to use tailwind 
import React from 'react';
import { createRoot } from 'react-dom/client';
import Sample from '../pages/sample.jsx';
import Home from '../pages/Home.jsx';
import Contact from '../pages/Contact.jsx';
import About from '../pages/About.jsx';



function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* <Sample/> */}
            {/* <Home/> */}
            <Contact/>
            {/* <About/> */}
        </div>
    );
}

const container = document.getElementById('app');
createRoot(container).render(<App />);
