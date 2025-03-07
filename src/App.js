import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Ranking from './pages/Ranking';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ranking" element={<Ranking />} />
            </Routes>
        </Router>
    );
}

export default App;