const { generateSuggestions } = require('./suggestionGenerator');
const { generateSummary } = require('./summaryGenerator');

function generateResponse(skillComparison, resumeAnalysis, jobAnalysis) {
  return {
    success: true,
    analysis: {
      missingSkills: skillComparison.missing,
      matchingSkills: skillComparison.matching,
      matchRate: skillComparison.matchRate,
      experience: resumeAnalysis.experience,
      suggestions: generateSuggestions(skillComparison, resumeAnalysis.experience),
      summary: generateSummary(skillComparison, resumeAnalysis, jobAnalysis)
    }
  };
}

module.exports = {
  generateResponse
};