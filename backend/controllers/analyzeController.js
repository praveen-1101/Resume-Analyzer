const skillAnalyzer = require('../services/skillAnalyzer');
const pdfExtractor = require('../services/pdfExtractor');
const { generateResponse } = require('../utils/responseGenerator');

async function analyzeResume(req, res) {
  try {
    // Validate request
    if (!req.file) {
      return res.status(400).json({ 
        error: true, 
        message: 'No resume file provided' 
      });
    }

    if (!req.body.jobDescription) {
      return res.status(400).json({ 
        error: true, 
        message: 'No job description provided' 
      });
    }

    // Extract text from PDF
    const resumeText = await pdfExtractor.extractText(req.file.buffer);
    if (!resumeText) {
      return res.status(400).json({
        error: true,
        message: 'Could not extract text from PDF'
      });
    }

    const jobDescription = req.body.jobDescription;

    // Analyze texts
    console.log('Analyzing resume text...');
    const resumeAnalysis = await skillAnalyzer.analyzeText(resumeText);
    
    console.log('Analyzing job description...');
    const jobAnalysis = await skillAnalyzer.analyzeText(jobDescription);

    // Compare skills
    console.log('Comparing skills...');
    const skillComparison = skillAnalyzer.compareSkills(
      resumeAnalysis.skills,
      jobAnalysis.skills
    );

    // Generate response
    const response = generateResponse(skillComparison, resumeAnalysis, jobAnalysis);

    console.log('Analysis complete');
    res.json(response);
  } catch (error) {
    console.error('Analysis error:', error);
    res.status(500).json({ 
      error: true, 
      message: error.message || 'Failed to analyze resume'
    });
  }
}

module.exports = {
  analyzeResume
};