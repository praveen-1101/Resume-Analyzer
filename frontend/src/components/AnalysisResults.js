import React from 'react';
import { Download, CheckCircle, XCircle, Info } from 'lucide-react';

export function AnalysisResults({ isLoading, results, onDownload }) {
  if (isLoading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto" />
        <p className="mt-2 text-sm text-gray-600">Analyzing your resume...</p>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto" />
        <p className="mt-2 text-sm text-gray-600">No results available...</p>
      </div>
    );
  }

  const { matchingSkills = [], missingSkills = [], summary = {} } = results;
  
  const matchRate = summary.matchRate || 0;
  const isPerfectMatch = matchRate === 100;
  const hasMatchingSkills = matchingSkills.length > 0;
  const hasMissingSkills = missingSkills.length > 0;

  const getRecommendations = () => {
    if (matchRate === 0) {
      return [
        "Take online courses or certifications in the required skills",
        "Look for entry-level positions or internships to gain experience",
        "Build personal projects showcasing your willingness to learn these technologies",
        "Join tech communities and attend workshops to learn from experts",
        "Create a learning roadmap focusing on fundamental skills first"
      ];
    } else if (matchRate < 30) {
      return [
        "Focus on acquiring the most critical missing skills first",
        "Update your resume to better highlight your existing relevant experience",
        "Consider contributing to open-source projects to gain practical experience",
        "Take advanced courses in your weakest areas",
        "Document your learning journey through a technical blog"
      ];
    } else if (matchRate < 70) {
      return [
        "Enhance your expertise in your matching skills through advanced projects",
        "Consider getting certifications for your strongest skills",
        "Network with professionals who work with your target technologies",
        "Participate in hackathons to apply your skills in real-world scenarios",
        "Mentor others to solidify your understanding"
      ];
    } else {
      return [
        "Focus on gaining advanced expertise in your existing skills",
        "Consider leadership or mentoring roles to showcase your expertise",
        "Stay updated with the latest trends in your field",
        "Share your knowledge through technical talks or workshops",
        "Build a personal brand around your expertise"
      ];
    }
  };

  const customRecommendations = getRecommendations();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Fixed Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-6 py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Analysis Results</h2>
          <button
            onClick={onDownload}
            className="relative inline-flex items-center px-4 py-2 text-base sm:text-lg font-semibold text-white bg-gradient-to-b from-[#ef6706] via-[#f07a0b] to-[#ba2323] rounded-full shadow-md hover:shadow-xl hover:scale-105 focus:outline-none transition-all duration-300 ease-in-out"
          >
            <span className="relative flex items-center">
              <Download className="h-5 w-5 mr-2 animate-bounce-slow text-white" />
              Download
            </span>
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="p-6 space-y-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
        {/* Match Rate Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Match Rate</h3>
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <span
                className={`text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                  matchRate <= 30
                    ? "from-red-500 to-red-600"
                    : matchRate <= 70
                    ? "from-blue-500 to-blue-600"
                    : "from-green-500 to-green-600"
                }`}
              >
                {matchRate?.toFixed(1)}%
              </span>
            </div>
            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                style={{ width: `${matchRate}%` }}
                className={`absolute top-0 h-full rounded-full transition-all duration-1000 ease-out ${
                  matchRate <= 30
                    ? "bg-gradient-to-r from-red-500 via-red-600 to-red-700"
                    : matchRate <= 70
                    ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
                    : "bg-gradient-to-r from-green-500 via-green-600 to-green-700"
                }`}
              >
                <div className="absolute inset-0 bg-opacity-25 bg-white background-shine"></div>
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>Beginner</span>
              <span>Intermediate</span>
              <span>Expert</span>
            </div>
          </div>
        </section>

        {/* Skills Overview Section */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Matching Skills */}
          <section className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Matching Skills</h3>
            <div className="bg-green-50 rounded-xl p-6">
              {hasMatchingSkills ? (
                <div className="flex flex-wrap gap-2">
                  {matchingSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <CheckCircle className="h-4 w-4" />
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="transform transition-all duration-300 hover:scale-[1.02]">
                  <div className="bg-gradient-to-br from-white to-green-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start space-x-3 p-4">
                      <div className="flex-shrink-0 bg-green-100 rounded-full p-2">
                        <Info className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-gray-900 font-medium">No matching skills found</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Consider developing skills that align with the position requirements. Focus on both technical and soft skills relevant to the role.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Missing Skills */}
          <section className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Missing Skills</h3>
            <div className="bg-red-50 rounded-xl p-6">
              {hasMissingSkills ? (
                <div className="flex flex-wrap gap-2">
                  {missingSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 px-3 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                    >
                      <XCircle className="h-4 w-4" />
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="transform transition-all duration-300 hover:scale-[1.02]">
                  <div className="bg-gradient-to-br from-white to-red-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start space-x-3 p-4">
                      <div className="flex-shrink-0 bg-red-100 rounded-full p-2">
                        <Info className="h-5 w-5 text-red-600" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-gray-900 font-medium">No skill gaps identified</p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Your current skill set appears to cover the basic requirements. Consider advancing your expertise in existing skills.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Recommendations Section */}
        <section className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Recommendations</h3>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 space-y-4">
            <div className={`p-4 ${isPerfectMatch ? 'bg-green-100 border-green-500' : 'bg-yellow-100 border-yellow-500'} border-l-4 rounded-md shadow-md`}>
              <p className="text-gray-700 font-semibold">
                {!hasMatchingSkills && hasMissingSkills ? (
                  "Your resume currently doesn't match the required skills. Here's what you can do to improve:"
                ) : isPerfectMatch ? (
                  "Excellent match! Your skills align perfectly with the requirements."
                ) : hasMatchingSkills && hasMissingSkills ? (
                  `You have a ${matchRate}% match rate. Here's how you can improve further:`
                ) : (
                  "We recommend focusing on acquiring relevant skills for this position."
                )}
              </p>
            </div>

            {/* Custom Recommendations */}
            {!isPerfectMatch && (
              <div className="space-y-3">
                {customRecommendations.map((recommendation, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-2 p-2 rounded-lg hover:bg-white/50 transition-colors duration-200"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{recommendation}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AnalysisResults;