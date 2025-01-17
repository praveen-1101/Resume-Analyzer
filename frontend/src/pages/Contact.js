
  import React, { useState } from "react";
import { ContactInfo } from "../components/contact/ContactInfo";
import { ContactForm } from "../components/contact/ContactForm";
import { FeedbackForm } from "../components/contact/FeedbackForm";

export function Contact() {
  const [activeSection, setActiveSection] = useState("info");

  const renderSection = () => {
    switch (activeSection) {
      case "info":
        return <ContactInfo />;
      case "form":
        return <ContactForm />;
      case "feedback":
        return <FeedbackForm />;
      default:
        return <ContactInfo />;
    }
  };

  return (
    <div className="bg-[#b0c4d2] text-white py-16 m:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2b777b] via-[#167f8a] to-blue-600">
            Contact Us
          </h2>
          <p className="text-lg text-[#003366] mt-4">
            Choose the section you want to explore
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <button
            onClick={() => setActiveSection("info")}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
              activeSection === "info"
                ? "bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
          >
            Contact Info
          </button>
          <button
            onClick={() => setActiveSection("form")}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
              activeSection === "form"
                ? "bg-gradient-to-r from-[#1be3c9] to-[#148392] shadow-lg"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
          >
            Contact Form
          </button>
          <button
            onClick={() => setActiveSection("feedback")}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
              activeSection === "feedback"
                ? "bg-gradient-to-r from-green-500 to-green-600 shadow-lg"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
          >
            Feedback
          </button>
        </div>

        <div className="p-8 rounded-xl shadow-xl border border-gray-300 transition-transform duration-300">
          {/* Render child components with appropriate background color */}
          <div
            className={`rounded-xl p-8 ${
              activeSection === "info"
                ? "bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB]"
                : activeSection === "form"
                ? "bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB]"
                : "bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB]"
            }`}
          >
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
}
