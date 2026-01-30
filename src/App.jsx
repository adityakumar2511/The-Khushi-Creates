import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
const Page = ({ title }) => (
  <div className="min-h-screen bg-base flex items-center justify-center text-dark text-4xl font-semibold">
    {title}
  </div>
);

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Page title="About" />} />
        <Route path="/service" element={<Page title="Service" />} />
        <Route path="/contact" element={<Page title="Contact" />} />
      </Routes>
      <Footer />
    </Router>
  );
}