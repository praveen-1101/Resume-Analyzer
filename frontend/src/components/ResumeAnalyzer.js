import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileUpload } from './FileUpload';
import { JobDescription } from './JobDescription';
import { AnalysisResults } from './AnalysisResults';
import { analyzeResume } from '../services/api';
import { generatePDF } from '../services/pdfGenerator';

const quotes = [
  "Your resume is the bridge between your skills and your dream job.",
  "A well-crafted resume speaks louder than words.",
  "Tailoring your resume to the job is the key to success.",
  "Highlight your achievements to stand out from the crowd.",
  "A polished resume opens the door to endless opportunities."
];

const images = [
  '/images/i1.jpg', 
  '/images/i2.jpg',
  '/images/i3.jpg',
  '/images/i4.jpg',
  '/images/i5.jpg',
  '/images/i6.jpg',
  '/images/i7.jpg',
];

export function ResumeAnalyzer() {
  const [jobDescription, setJobDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const [randomContent, setRandomContent] = useState(null);
  const [resetFileUpload, setResetFileUpload] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');
  // Load results and input fields from localStorage on component mount
  useEffect(() => 
  {
    const savedJobDescription = localStorage.getItem('jobDescription');
    
    if (savedJobDescription) 
    {
      setJobDescription(savedJobDescription);
    }
      if (!jobDescription && !selectedFile) {
        const isQuote = Math.random() > 0.5; // 50% chance
        if (isQuote) {
          const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
          setRandomContent({ type: 'quote', content: randomQuote });
        } else {
          const randomImage = images[Math.floor(Math.random() * images.length)];
          setRandomContent({ type: 'image', content: randomImage });
        }
      }
  }, [jobDescription, selectedFile]);

  const handleAnalyze = async () => 
  {
    if (!jobDescription && !selectedFile) {
      setWarningMessage('Uploading both Job description and resume are required');
      return;
    }
    if (!jobDescription) {
      setWarningMessage('Job description is required.');
      return;
    }
    if (!selectedFile) {
      setWarningMessage('Resume upload is required.');
      return;
    }
     
  console.log("Both fields are filled, proceeding to analyze");
    setIsAnalyzing(true);
    setResults(null);
    setWarningMessage(''); 
  
    try 
    {
      const data = await analyzeResume(selectedFile, jobDescription);
      setResults(data);
      localStorage.setItem('resumeAnalysisResults', JSON.stringify(data));
      
    } 
    catch (error) 
    {
      setWarningMessage('Failed to analyze resume. Please try again.');
      console.error('Analysis error:', error);
    } 
    finally 
    {
      setIsAnalyzing(false);
    }
  };

  const handleDownload = () => 
  {
    if (!results) return;
    const doc = generatePDF(results);
    doc.save('resume-analysis.pdf');
  };

  const handleJobDescriptionChange = (value) => 
  {
    setJobDescription(value);
    localStorage.setItem('jobDescription', value);
    setResults(null);
    setWarningMessage('');
  };

  const handleFileSelect = (file) => 
  {
    setSelectedFile(file);
    localStorage.setItem('selectedFile', file.name); // Save file name
    setResults(null);
    setWarningMessage('');
  };

  const handleStartNew = () => 
  {
    setJobDescription('');
    setSelectedFile(null);
    setResults(null);
    setResetFileUpload((prev) => !prev);
    localStorage.removeItem('jobDescription');
    localStorage.removeItem('selectedFile');
    localStorage.removeItem('resumeAnalysisResults');
  };
  

  return (
    <div className="min-h-screen bg-[#b0c4d2] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mt-4 text-xl text-center text-[#003366] max-w-2xl mx-aut font-serif">
          Upload your resume and job description to receive a detailed analysis
          of your skills and job alignment.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Input Section */}
          <div className="space-y-8 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Upload Your Details
            </h2>

            <JobDescription
              value={jobDescription}
              onChange={handleJobDescriptionChange}
              placeholder="e.g., Software Engineer, Project Manager"
            />
            <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 from-neutral-800">
              Resume File
            </label>
            <FileUpload onFileSelect={handleFileSelect} reset={resetFileUpload} selectedFile={selectedFile} />

            {warningMessage && (
              <p className="mt-4 text-center text-red-600 font-semibold animate-pulse">
                {warningMessage}
              </p>
            )}
             
            {!jobDescription || !selectedFile ? (
              <p className="mt-4 text-center text-yellow-600 font-semibold italic">
                For the best analysis results, ensure that both your job description and resume include full skill names. This will help provide a more accurate and comprehensive match.
              </p>
            ) : null}

              <div className="flex justify-center">
               
                <motion.button
                onClick={handleAnalyze}
                disabled={!jobDescription || !selectedFile || isAnalyzing}
                className={`w-2/5 px-6 py-3 text-lg font-medium text-white rounded-full transition-all duration-300 ease-in-out transform ${
                  isAnalyzing
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-[#29b3cb] shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer'
                } border-transparent `}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze'}
              </motion.button>
            </div>
          </div>

          {/* Right Column - Conditional Rendering with Images and Quotes */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center space-y-8">
            {isAnalyzing ? (
                <motion.div className="flex items-center justify-center"
                  initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                >
              <div className="text-center justify-center">
                <svg
                  className="animate-pulse h-10 w-10 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  >
                  </circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  >
                  </path>
                </svg>
                <p className="mt-4 text-gray-600">Analyzing your resume...</p>
              </div>
              </motion.div>
            ) :results ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <AnalysisResults
                  isLoading={isAnalyzing}
                  results={results}
                  onDownload={handleDownload}
                />
                <div className="flex justify-center items-center mt-8">
                  <button
                    onClick={handleStartNew}
                    className="relative flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#00ffff] via-[#6a0dad] to-[#ff1493] hover:scale-105 transition-transform duration-300 shadow-[0_0_6px_rgba(0,255,255,0.4),_0_0_12px_rgba(255,20,147,0.3),_0_0_18px_rgba(106,13,173,0.2)] hover:shadow-[0_0_8px_rgba(0,255,255,0.5),_0_0_14px_rgba(255,20,147,0.4),_0_0_20px_rgba(106,13,173,0.3)]"
                  >
                    <span className="relative z-10 text-lg font-bold text-white">
                      START NEW ANALYSIS
                    </span>
                
                    {/* Glow Overlay */}
                    <div className="absolute inset-0 rounded-lg blur-sm opacity-40 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600"></div>
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div className="text-center space-y-8"
              initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                
                {randomContent?.type === 'quote' ? (
                  <div>
                    <p className="text-2xl font-semibold text-gray-800 italic">
                      "{randomContent.content}"
                    </p>
                  </div>
                ) : (
                  <div className="w-full">
                    
                    <img
                      src={randomContent?.content}
                      alt="Motivational"
                      className="w-full h-[300px] object-cover rounded-lg shadow-md"
                    />
                    
                  </div>
                )}
                <p className="mt-4 text-gray-600">
                  Start by uploading your resume and job description.
                </p>
                </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

  
