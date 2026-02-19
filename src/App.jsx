import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Service from "./pages/Service";  
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToHash from "./ScrollToHash"; // New component

const Page = ({ title }) => (
  <div className="min-h-screen bg-base flex items-center justify-center text-dark text-4xl font-semibold">
    {title}
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToHash /> {/* Add this */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}