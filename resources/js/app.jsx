import './bootstrap.js';
import '../css/app.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Sample from '../pages/sample.jsx';



function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Sample/>
        </div>
    );
}

const container = document.getElementById('app');
createRoot(container).render(<App />);
