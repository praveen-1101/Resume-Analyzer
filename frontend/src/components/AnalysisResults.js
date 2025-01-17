import React from 'react';
import { Download, CheckCircle, XCircle} from 'lucide-react';

export function AnalysisResults({ isLoading, results, onDownload }) {
  if (isLoading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto" />
        <p className="mt-2 text-sm text-gray-600">Analyzing your resume...</p>
      </div>
    );
  }

  if (!results) return null;

  const { matchingSkills = [], missingSkills = [], suggestions = [], summary = {} } = results;
  
  const matchRate = summary.matchRate || 0;
  const isPerfectMatch = matchRate === 100;
  const hasMatchingSkills = matchingSkills.length > 0;
  const hasMissingSkills = missingSkills.length > 0;

  return (
    <div className="space-y-6 bg-white rounded-lg shadow p-6">
      {/* Header */}
      <div className="flex justify-between items-center  transition-all duration-300 ease-in-out p-4 rounded-xl">
  <h2 className="text-xl font-semibold text-gray-900">Analysis Results</h2>
  <button
    onClick={onDownload}
    className="relative inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-b from-[#ef6706] via-[#f07a0b] to-[#ba2323] rounded-full shadow-md hover:shadow-xl hover:bg-gradient-to-b hover:from-[#ef6706] hover:via-[#f07a0b] hover:to-[#ba2323] hover:scale-105 focus:outline-none transition-all duration-300 ease-in-out"
  >
    <span className="absolute inset-0 bg-gradient-to-r from-[#ef6706] via-[#f07a0b] to-[#ba2323] opacity-0 transition-opacity duration-300 rounded-full hover:opacity-30"></span>
    <span className="relative flex items-center">
      <Download className="h-5 w-5 mr-2 animate-bounce-slow text-white" />
      Download Report
    </span>
  </button>
</div>
      <div className="space-y-6">
        {/* Match Rate Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
  <h3 className="text-lg font-medium text-gray-900 mb-4">Match Rate</h3>
  <div className="relative">
    <div className="flex items-center justify-between mb-4">
      <span
        className={`text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
          summary.matchRate <= 30
            ? "from-red-500 to-red-600"
            : summary.matchRate <= 70
            ? "from-blue-500 to-blue-600"
            : "from-green-500 to-green-600"
        }`}
      >
        {summary.matchRate?.toFixed(1)}%
      </span>
    </div>
    <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
      <div
        style={{ width: `${summary.matchRate}%` }}
        className={`absolute top-0 h-full rounded-full transition-all duration-1000 ease-out ${
          summary.matchRate <= 30
            ? "bg-gradient-to-r from-red-500 via-red-600 to-red-700"
            : summary.matchRate <= 70
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
          {hasMatchingSkills && (
            <section className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Matching Skills</h3>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex flex-wrap gap-2">
                  {matchingSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium"
                    > 
                    <CheckCircle className="h-4 w-4" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Missing Skills */}
          {hasMissingSkills > 0 && (
            <section className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Missing Skills</h3>
              <div className="bg-red-50 rounded-lg p-4">
                <div className="flex flex-wrap gap-2">
                  {missingSkills.map((skill, index) => (
                    <span
                      key={index}
                      className=" flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium"
                    > 
                      <XCircle className="h-4 w-4" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>

        
      

        

               <section className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Recommendations</h3>
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 space-y-4">
          {/* No Matching Skills */}
          {!hasMatchingSkills && !hasMissingSkills && (
            <>
            <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-md shadow-md">
              <p className="text-gray-700 font-semibold">
                It seems your resume lacks key skills for the job requirements. Consider gaining relevant certifications or experience to enhance your profile.
              </p>
            </div>
            {suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{suggestion}</p>
                </div>
              ))}
            </>
            
          )}

          {/* Perfect Match */}
          {isPerfectMatch && (
            <div className="p-4 bg-green-100 border-l-4 border-green-500 rounded-md shadow-md">
              <p className="text-gray-700 font-semibold">
                Your resume is perfectly aligned with the job description. You are ready to proceed with the application!
              </p>
            </div>
          )}

          {/* Partial Match */}
          {hasMatchingSkills && hasMissingSkills && (
            <>
              <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-md shadow-md">
                <p className="text-gray-700 font-semibold">
                  Your resume is on the right track but could improve further by addressing the missing skills.
                </p>
              </div>
              {suggestions.map((suggestion, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{suggestion}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </section>

      </div>
    </div>
  );
}