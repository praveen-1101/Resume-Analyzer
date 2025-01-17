import React, { useState } from "react";
import {CheckCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus({
        type: "success",
        message: "Message sent successfully! We’ll get back to you shortly.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "There was an error submitting your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 rounded-xl shadow-xl bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] max-w-lg mx-auto border border-gray-300">
      {status.type === "success" ? (
        <div className="p-10 flex flex-col items-center space-y-6 bg-gradient-to-t from-[#16d8ee] to-[#1b7373] rounded-xl shadow-lg text-white">
          <CheckCircle className="h-20 w-20 text-white animate-pulse" />
          <h3 className="text-2xl font-bold text-center">{status.message}</h3>
          <button
            onClick={() => setStatus({ type: "", message: "" })}
            className="px-8 py-3 text-base font-medium text-[#1b7373] bg-white rounded-lg shadow-md hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="block w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="block w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              className="block w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
              placeholder="Write your message..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-md hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 disabled:bg-opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
