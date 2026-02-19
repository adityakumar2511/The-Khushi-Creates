import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import logo from "../assets/logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Service", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const location = useLocation();

  return (
    <header className="bg-base shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-15 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 relative">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                onMouseEnter={() => setHovered(item.path)}
                onMouseLeave={() => setHovered(null)}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                className={`relative font-semibold transition-colors pb-1
                  ${isActive ? "text-primary" : "text-dark hover:text-primary"}`}
              >
                {item.name}

                {/* Hover underline - sirf hover par */}
                {hovered === item.path && !isActive && (
                  <motion.span
                    className="absolute left-0 bottom-0 h-[2px] w-full bg-primary"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}

                {/* Active underline - primary color */}
                {isActive && (
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-primary" />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-dark text-2xl"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-base border-t border-dark/10"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    className={`text-lg font-semibold transition-colors
                      ${isActive ? "text-primary" : "text-dark hover:text-primary"}`}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}