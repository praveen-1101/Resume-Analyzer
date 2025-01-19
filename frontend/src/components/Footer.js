import React from "react";
import { Mail } from "lucide-react";
import { 
  Linkedin, 
  Github, 
  Instagram, 
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1A1A40] via-[#1F1F59] to-[#0D0D2D] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-sm font-semibold text-[#FACC15] tracking-wider uppercase">
              About
            </h3>
            <p className="mt-4 text-base text-gray-300">
            Resume Analyzer helps you seamlessly match your skills with job requirements, ensuring a perfect fit for your career.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-sm font-semibold text-[#FACC15] tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="/"
                  className="text-base text-gray-300 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/analyzer"
                  className="text-base text-gray-300 hover:text-white transition"
                >
                  Analyzer
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-base text-gray-300 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-sm font-semibold text-[#FACC15] tracking-wider uppercase">
              Connect
            </h3>
            <div className="mt-4 flex space-x-6">
              <a
                href="mailto:borapraveen1101@gmail.com"
                className="text-gray-300 hover:text-[#FACC15] transition"
                aria-label="Contact via Email"
                target="_blank"
                rel="noopener noreferrer"    
              >
                <Mail className="h-6 w-6" />
              </a>
 
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/praveen-kumar-031473270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#0077B5] transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/praveen-1101"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#FACC15] transition"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              {/* Instagram */}
               <a
                href="https://www.instagram.com/001_praveen_kumar_?utm_source=qr&igsh=MXU3anJwcTQwMGlnZQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#E1306C] transition"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
             
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#FACC15] font-medium">Resume Analyzer</span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
