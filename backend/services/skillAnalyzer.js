const { extractSkillsFromText } = require('../utils/skillExtractor');
const { SKILL_PATTERNS } = require('../utils/skillPatterns');

class SkillAnalyzer {
  async analyzeText(text) {
    if (!text || typeof text !== 'string') {
      throw new Error('Invalid input: text must be a non-empty string');
    }

    try {
      const skills = await extractSkillsFromText(text.trim(), SKILL_PATTERNS);
      
      return {
        skills: skills || [],
        experience: this.extractExperience(text) || { total: 0, details: [] }
      };
    } catch (error) {
      throw new Error(`Skill analysis failed: ${error.message}`);
    }
  }

  extractExperience(text) {
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

  compareSkills(resumeSkills = [], jobSkills = []) {
    const normalizedResumeSkills = resumeSkills.map(s => s.toLowerCase());
    const normalizedJobSkills = jobSkills.map(s => s.toLowerCase());

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

module.exports = new SkillAnalyzer();