class SkillMatcher {
    async extractSkills(text) {
      if (!text) return [];
  
      const foundSkills = new Set();
      const lowerText = text.toLowerCase();
      const words = lowerText.split(/[\s,.()\[\]{}]+/);
  
      SKILL_PATTERNS.forEach(skill => {
        const skillLower = skill.toLowerCase();
        // For multi-word skills
        if (skillLower.includes(' ')) {
          if (lowerText.includes(skillLower)) {
            foundSkills.add(skill);
          }
        } else {
          // For single-word skills, match whole words only
          const skillRegex = new RegExp(`\\b${skillLower}\\b`, 'i');
          if (skillRegex.test(lowerText)) {
            foundSkills.add(skill);
          }
        }
      });
  
      return Array.from(foundSkills).sort();
    }
  
    compareSkills(resumeSkills, jobSkills) {
      const normalizedResumeSkills = resumeSkills.map(s => s.toLowerCase().trim());
      const normalizedJobSkills = jobSkills.map(s => s.toLowerCase().trim());
  
      const missing = normalizedJobSkills.filter(skill => 
        !normalizedResumeSkills.includes(skill)
      );
  
      const matching = normalizedJobSkills.filter(skill => 
        normalizedResumeSkills.includes(skill)
      );
  
      const matchRate = normalizedJobSkills.length ? 
        (matching.length / normalizedJobSkills.length) * 100 : 0;
  
      return {
        missing,
        matching,
        matchRate: Math.round(matchRate * 10) / 10
      };
    }
  }
  
  module.exports = SkillMatcher;