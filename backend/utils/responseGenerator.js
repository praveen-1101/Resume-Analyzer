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

function generateSuggestions(skillComparison, experience) {
  const suggestions = [];

  if (skillComparison.missing.length > 0) {
    suggestions.push(
      `Consider adding experience with: ${skillComparison.missing.join(', ')}`
    );
  }

  if (skillComparison.matchRate < 50) {
    suggestions.push(
      'Your skill match rate is below 50%. Consider focusing on acquiring the missing skills.'
    );
  }

  if (experience.total < 2) {
    suggestions.push(
      'Consider highlighting projects or certifications to compensate for less experience.'
    );
  }

  return suggestions;
}

function generateSummary(skillComparison, resumeAnalysis, jobAnalysis) {
  return {
    matchRate: skillComparison.matchRate,
    totalExperience: resumeAnalysis.experience.total,
    skillsFound: resumeAnalysis.skills.length,
    skillsRequired: jobAnalysis.skills.length,
    experienceDetails: resumeAnalysis.experience.details
  };
}

module.exports = {
  generateResponse,
  generateSuggestions,
  generateSummary
};