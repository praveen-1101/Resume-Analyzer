import { Link } from "react-router-dom";
import { FileSearch, Award, Zap } from "lucide-react";

export function Home() {
  return (
    <div className="text-white font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#4e6e9b] to-[#1a3c5c] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl leading-tight">
              Optimize Your Resume for Success
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-lg text-[#FACC15] sm:text-xl md:mt-8 md:text-2xl md:max-w-2xl">
            Quickly match your skills with job requirements using our advanced resume analysis tool.
             </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link
                to="/analyzer"
                className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg text-[#1A1A40] bg-[#FACC15] hover:bg-yellow-400 shadow-lg transition-transform transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-lg text-white border border-[#FACC15] hover:border-yellow-400 hover:bg-[#343467] transition-transform transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About the Project Section */}
<div className="py-24 bg-gradient-to-br from-blue-50 via-white to-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-4xl font-extrabold text-[#1a3c5c] sm:text-5xl">
        About the Resume Analyzer
      </h2>
      <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
        The Resume Analyzer is an innovative tool crafted for students and professionals alike. 
        It focuses on optimizing resumes by identifying missing skills and matching them with job descriptions, 
        enhancing your chances of success in the competitive job market.
      </p>
    </div>

    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="flex flex-col items-center text-center shadow-md rounded-lg bg-gradient-to-t from-white to-blue-100 p-8 border-t-4 border-blue-500">
        <h3 className="text-2xl font-semibold text-blue-700">
          Built for Students
        </h3>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Designed to help students improve their resumes and boost their profiles, making it easier to 
          secure internships and job opportunities.
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center text-center shadow-md rounded-lg bg-gradient-to-t from-white to-green-100 p-8 border-t-4 border-green-500">
        <h3 className="text-2xl font-semibold text-green-700">
          Skill Matching Expertise
        </h3>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Dynamically identifies missing skills by analyzing your resume against job descriptions, 
          providing actionable recommendations to bridge the gap.
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center text-center shadow-md rounded-lg bg-gradient-to-t from-white to-indigo-100 p-8 border-t-4 border-indigo-500">
        <h3 className="text-2xl font-semibold text-indigo-700">
          Professional Results
        </h3>
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          Delivers polished, professional resumes that align with industry standards, giving you a competitive edge.
        </p>
      </div>
    </div>
  </div>
</div>

<div className="py-24 bg-gradient-to-r from-[#f3f4f6] to-[#e5e7eb]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-[#1a3c5c] sm:text-4xl">
        How It Works
      </h2>
      <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
        Follow these simple steps to optimize your resume for success.
      </p>
    </div>

    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
      {/* Step 1 */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-gradient-to-r from-[#e3a35a] to-[#c96a21] text-white rounded-full h-24 w-24 flex items-center justify-center shadow-lg">
          <span className="text-2xl font-bold">1</span>
        </div>
        <h3 className="mt-6 text-lg font-semibold text-[#1a3c5c]">
          Add Job Description
        </h3>
        <p className="mt-2 text-gray-600">
          Paste the job description to match your resume with specific roles.
        </p>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-gradient-to-r from-[#e2f329] to-[#ac9e0a] text-white rounded-full h-24 w-24 flex items-center justify-center shadow-lg">
          <span className="text-2xl font-bold">2</span>
        </div>
        <h3 className="mt-6 text-lg font-semibold text-[#1a3c5c]">
          Upload Resume
        </h3>
        <p className="mt-2 text-gray-600">
          Start by uploading your current resume in PDF format.
        </p>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-gradient-to-r from-[#52ee52] to-[#228B22] text-white rounded-full h-24 w-24 flex items-center justify-center shadow-lg">
          <span className="text-2xl font-bold">3</span>
        </div>
        <h3 className="mt-6 text-lg font-semibold text-[#1a3c5c]">
          Analyze
        </h3>
        <p className="mt-2 text-gray-600">
          Let our tool analyze and identify matching skills or gaps instantly.
        </p>
      </div>

      {/* Step 4 */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-gradient-to-r from-[#15d7dd] to-[#0b8d97] text-white rounded-full h-24 w-24 flex items-center justify-center shadow-lg">
          <span className="text-2xl font-bold">4</span>
        </div>
        <h3 className="mt-6 text-lg font-semibold text-[#1a3c5c]">
          Download Updated Resume
        </h3>
        <p className="mt-2 text-gray-600">
          Download your analysis result and apply for your dream job.
        </p>
      </div>
    </div>
  </div>
</div>



      {/* Features Section */}
      <div className="py-24 bg-gradient-to-r from-[#e3eaf0] to-[#b0c4d2]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-[#1a3c5c] sm:text-4xl">
        Why Choose Our Resume Analyzer?
      </h2>
      <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
        Our advanced tool helps you craft the perfect resume by analyzing and matching your skills with job requirements.
      </p>
    </div>

    <div className="mt-20">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {/* Smart Analysis Section */}
        <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/50 transition transform hover:-translate-y-2">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/600x400/?technology,ai')",
            }}
          ></div>
          <div className="relative bg-gradient-to-r from-[#F0F8FF] to-[#E0F7FF] bg-opacity-90 p-6 flex flex-col items-center text-center">
            <div className="bg-blue-600 text-white rounded-full h-24 w-24 flex items-center justify-center p-6 shadow-lg">
              <FileSearch className="h-12 w-12" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-[#1E3A8A]">
              Smart Analysis
            </h3>
            <p className="mt-4 text-base text-[#1E293B] leading-relaxed">
              Instantly analyze your resume by comparing your skills with job requirements.
            </p>
          </div>
        </div>

        {/* Skill Matching Section */}
        <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-500/50 transition transform hover:-translate-y-2">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/600x400/?skills,data')",
            }}
          ></div>
          <div className="relative bg-gradient-to-r from-[#FFF9C4] to-[#FFF59D] bg-opacity-90 p-6 flex flex-col items-center text-center">
            <div className="bg-yellow-500 text-white rounded-full h-24 w-24 flex items-center justify-center p-6 shadow-lg">
              <Award className="h-12 w-12" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-[#F59E0B]">
              Skill Matching
            </h3>
            <p className="mt-4 text-base text-[#1E293B] leading-relaxed">
              Identify matching and missing skills to improve your job application success rate.
            </p>
          </div>
        </div>

        {/* Instant Results Section */}
        <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-green-500/50 transition transform hover:-translate-y-2">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{
              backgroundImage:
                "url('https://source.unsplash.com/600x400/?speed,results')",
            }}
          ></div>
          <div className="relative bg-gradient-to-r from-[#D1FAE5] to-[#A7F3D0] bg-opacity-90 p-6 flex flex-col items-center text-center">
            <div className="bg-green-500 text-white rounded-full h-24 w-24 flex items-center justify-center p-6 shadow-lg">
              <Zap className="h-12 w-12" />
            </div>
            <h3 className="mt-6 text-xl font-medium text-[#065F46]">
              Instant Results
            </h3>
            <p className="mt-4 text-base text-[#1E293B] ">
              Get detailed analysis reports with actionable suggestions instantly.
            </p>
          </div>
          
        </div>
        
      </div>
      <div className="flex justify-center mt-8">
  {/* Read More Button */}
  <button
    className="mt-6 inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-400 via-red-500 to-pink-500
 rounded-full shadow-lg transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-orange-500 hover:via-red-600 hover:to-pink-600 active:scale-95 active:bg-gradient-to-r active:from-orange-500 active:via-red-600 active:to-pink-600
 focus:outline-none focus:ring-4 focus:ring-opacity-50 focus:ring-pink-300"
    onClick={() => (window.location.href = '/faq')}
  >
    <span className="relative flex items-center">
      <span className="relative">✨ Read More</span>
    </span>
  </button>
</div>

    </div>
  </div>
</div>
    </div>
  );
}
