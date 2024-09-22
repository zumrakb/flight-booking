import React from 'react'
import HomePage from "./pages/HomePage.jsx"
import MyFlightsPage from './pages/MyFlightsPage.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/my-flights" element={<MyFlightsPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

