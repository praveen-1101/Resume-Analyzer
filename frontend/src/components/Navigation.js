 import React, { useState } from "react";
  import { Link, useLocation } from "react-router-dom";
  import { Briefcase, Menu, X } from "lucide-react";
  
  export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
  
    const isActive = (path) => location.pathname === path;
  
    const navLinks = [
      { path: "/", label: "Home" },
      { path: "/analyzer", label: "Analyzer" },
      { path: "/faq", label: "FAQ" },
      { path: "/contact", label: "Contact" },
    ];
  
    return (
      <nav className="bg-gradient-to-r from-[#1A1A40] via-[#1F1F59] to-[#0D0D2D] text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Briefcase className="h-8 w-8 text-[#FACC15]" />
              <span className="ml-3 text-2xl font-bold tracking-wide">
                Resume Analyzer
              </span>
            </div>
  
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-5 py-2 rounded-lg text-base font-semibold tracking-wide transition-all ${
                    isActive(path)
                      ? "bg-[#FACC15] text-[#1A1A40]"
                      : "hover:bg-[#343467] hover:text-[#FACC15]"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
  
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-[#343467] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FACC15]"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-[#FACC15]" />
                ) : (
                  <Menu className="h-6 w-6 text-[#FACC15]" />
                )}
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-[#1F1F59] to-[#0D0D2D] shadow-md">
            <div className="space-y-2 px-4 py-4">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`block px-5 py-3 rounded-lg text-base font-medium tracking-wide transition-all ${
                    isActive(path)
                      ? "bg-[#FACC15] text-[#1A1A40]"
                      : "hover:bg-[#343467] hover:text-[#FACC15]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    );
  }
  