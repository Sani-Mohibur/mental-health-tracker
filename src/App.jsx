import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Exercises from "./pages/Exercises";
import MoodTracker from "./pages/MoodTracker";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
function App() {
  return (
    <Router>
      <div
        className="flex flex-col min-h-screen bg-background 
        text-text transition-colors duration-300"
      >
        <Navbar />
        <main className="flex-grow p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/mood-tracker" element={<MoodTracker />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
