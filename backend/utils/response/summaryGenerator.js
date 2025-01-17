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
    generateSummary
  };