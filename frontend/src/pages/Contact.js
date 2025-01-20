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
    <main className="min-h-screen bg-gradient-to-br from-[#f9fafb] to-[#e7ebf0] flex items-center justify-center">
      <section className="max-w-4xl w-full bg-white shadow-2xl overflow-hidden">
        <header className="text-center bg-gradient-to-r from-[#2a65ad] to-[#0d56af] py-8">
          <h1 className="text-3xl font-extrabold text-white">Contact Us</h1>
          <p className="text-white mt-2">We'd love to hear from you!</p>
        </header>

        <nav className="px-6 py-8">
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveSection("info")}
              className={`w-full sm:w-auto px-6 py-3 text-sm font-semibold rounded-lg transition-all ${
                activeSection === "info"
                  ? "bg-[#222277] text-white shadow-md"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
            >
              Contact Info
            </button>
            <button
              onClick={() => setActiveSection("form")}
              className={`w-full sm:w-auto px-6 py-3 text-sm font-semibold rounded-lg transition-all ${
                activeSection === "form"
                  ? "bg-[#222277] text-white shadow-md"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
            >
              Contact Form
            </button>
            <button
              onClick={() => setActiveSection("feedback")}
              className={`w-full sm:w-auto px-6 py-3 text-sm font-semibold rounded-lg transition-all ${
                activeSection === "feedback"
                  ? "bg-[#222277] text-white shadow-md"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
            >
              Feedback
            </button>
          </div>

          <div className="rounded-lg shadow-inner bg-gray-50 p-6">
            {renderSection()}
          </div>
        </nav>
      </section>
    </main>
  );
}
