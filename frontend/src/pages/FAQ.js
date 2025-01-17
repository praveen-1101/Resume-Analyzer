
  import React from "react";
  import { FileText, Shield, AlertCircle } from "lucide-react";
  
  export function FAQ() {
    return (
      <div className="bg-[#b0c4d2] py-12 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-12 text-center text-[#003366]">
            Frequently Asked Questions
          </h1>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* How to Use Section */}
            <div className="rounded-lg shadow-lg p-6 bg-gradient-to-r from-[#F0F8FF] to-[#E0F7FF] hover:shadow-lg hover:shadow-blue-500/50 transition transform hover:-translate-y-2">
              <div className="flex flex-col items-center">
                <FileText className="h-16 w-16 text-[#1D4ED8] mb-4" />
                <h2 className="text-xl font-semibold text-[#1E3A8A] mb-4">
                  How to Use the Resume Analyzer
                </h2>
                <ul className="space-y-4 text-[#1E293B] text-center">
                  <li>
                    <strong>1. Upload Your Resume:</strong> Click the upload area
                    or drag and drop your PDF file.
                  </li>
                  <li>
                    <strong>2. Add Job Description:</strong> Paste the job
                    description for analysis.
                  </li>
                  <li>
                    <strong>3. Review Results:</strong> Get instant feedback on
                    skill matches and improvement tips.
                  </li>
                </ul>
              </div>
            </div>
  
            {/* Troubleshooting Section */}
            <div className="rounded-lg shadow-lg p-6 bg-gradient-to-r from-[#EEF2FF] to-[#E0E7FF] hover:shadow-lg hover:shadow-indigo-500/50 transition transform hover:-translate-y-2">
              <div className="flex flex-col items-center">
                <AlertCircle className="h-16 w-16 text-[#4338CA] mb-4" />
                <h2 className="text-xl font-semibold text-[#312E81] mb-4">
                  Troubleshooting
                </h2>
                <ul className="space-y-4 text-[#1E293B] text-center">
                  <li>
                    <strong>File Upload Issues:</strong> Ensure the file is in PDF
                    format and under 5MB.
                  </li>
                  <li>
                    <strong>Analysis Problems:</strong> Provide both resume and
                    job description. Ensure proper formatting.
                  </li>
                  <li>
                    <strong>Refresh:</strong> If all else fails, refresh the page
                    and try again.
                  </li>
                </ul>
              </div>
            </div>
  
            {/* Privacy Section */}
            <div className="rounded-lg shadow-lg p-6 bg-gradient-to-r from-[#D1FAE5] to-[#A7F3D0] hover:shadow-lg hover:shadow-green-500/50 transition transform hover:-translate-y-2">
              <div className="flex flex-col items-center">
                <Shield className="h-16 w-16 text-[#059669] mb-4" />
                <h2 className="text-xl font-semibold text-[#065F46] mb-4">
                  Privacy & Security
                </h2>
                <ul className="space-y-4 text-[#1E293B] text-center">
                  <li>Your resume is analyzed securely in real time.</li>
                  <li>
                    Files are processed temporarily and not stored permanently.
                  </li>
                  <li>
                    We don’t share your data with third parties under any
                    circumstance.
                  </li>
                  <li>
                    All analysis results are deleted after your session ends.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
