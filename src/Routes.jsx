import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route exact path="/statistics" element={<h1>Statistics Page</h1>} />
            <Route exact path="/customers" element={<h1>Customers Page</h1>} />
            <Route exact path="/diagrams" element={<h1>Diagrams Page</h1>} />
        </Routes>
    );
};

export default AppRoutes;
