class ExperienceExtractor {
    extract(text) {
      const experiencePattern = /(\d+)\s*(?:years?|yrs?)\s*(?:of)?\s*experience/gi;
      const matches = [...text.matchAll(experiencePattern)];
      
      const experience = {
        total: 0,
        details: []
      };
  
      matches.forEach(match => {
        const years = parseInt(match[1]);
        if (!isNaN(years)) {
          experience.details.push({
            years,
            context: match[0]
          });
          experience.total = Math.max(experience.total, years);
        }
      });
  
      return experience;
    }
  }
  
  module.exports = ExperienceExtractor;