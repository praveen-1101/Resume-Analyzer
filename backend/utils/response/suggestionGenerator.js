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
  
  module.exports = {
    generateSuggestions
  };