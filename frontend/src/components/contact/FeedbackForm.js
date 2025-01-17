import React, { useState } from "react";
import { Star, CheckCircle } from "lucide-react";

export function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
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
        message: "Thank you for your feedback!",
      });
      setRating(0);
      setFeedback("");
    } catch (error) {
      setStatus({
        type: "error",
        message: "There was an error submitting your feedback. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 rounded-lg shadow-lg bg-gradient-to-br from-[#F3F4F6] to-[#E5E7EB] max-w-lg mx-auto border border-gray-300">
      {status.type === "success" ? (
        <div className="flex flex-col items-center text-center bg-gradient-to-b from-[#46d4ed] to-[#1b7477] p-10 rounded-lg shadow-xl text-white">
          <CheckCircle className="h-16 w-16 text-white mb-4" />
          <h3 className="text-2xl font-semibold">{status.message}</h3>
          <button
            onClick={() => setStatus({ type: "", message: "" })}
            className="mt-6 px-6 py-2 bg-white text-[#186264] font-medium rounded-md shadow-md hover:bg-gray-100 transition-all"
          >
            Submit another feedback
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="rating"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Rating
            </label>
            <div className="flex space-x-2">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  className={`h-8 w-8 cursor-pointer transition-transform duration-200 ${
                    index < rating
                      ? "text-yellow-400 hover:scale-105"
                      : "text-gray-300 hover:scale-110"
                  }`}
                  onClick={() => setRating(index + 1)}
                  fill={index < rating ? "currentColor" : "none"} 
                />
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="feedback"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Your Feedback
            </label>
            <textarea
              id="feedback"
              rows={5}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full p-4 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              placeholder="Write your feedback here..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 transition-all"
          >
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      )}
    </div>
  );
}
