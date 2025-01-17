const SkillMatcher = require('./skillMatcher');
const ExperienceExtractor = require('./experienceExtractor');

class SkillAnalyzer {
  constructor() {
    this.skillMatcher = new SkillMatcher();
    this.experienceExtractor = new ExperienceExtractor();
  }

  async analyzeText(text) {
    if (!text || typeof text !== 'string') {
      throw new Error('Invalid input: text must be a non-empty string');
    }

    try {
      const skills = await this.skillMatcher.extractSkills(text.trim());
      const experience = this.experienceExtractor.extract(text);
      
      return { skills, experience };
    } catch (error) {
      throw new Error(`Skill analysis failed: ${error.message}`);
    }
  }

  compareSkills(resumeSkills = [], jobSkills = []) {
    return this.skillMatcher.compareSkills(resumeSkills, jobSkills);
  }
}

module.exports = new SkillAnalyzer();