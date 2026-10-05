// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import References from "./pages/References";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f7f4f0] text-[#292624]">
       <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/references" element={<References />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;