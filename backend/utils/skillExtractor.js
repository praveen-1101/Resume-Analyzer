
const { SKILL_ALIASES } = require('./skillPatterns');

async function extractSkillsFromText(text, patterns = SKILL_ALIASES) {
  if (!text || typeof text !== 'string') {
    return [];
  }

  const foundSkills = new Set();
  const lowerText = text.toLowerCase();

  Object.keys(patterns).forEach(skill => {
    // Check for aliases of each skill
    patterns[skill].forEach(alias => {
      const escapedSkill = alias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escapedSkill.toLowerCase()}\\b`, 'g');
      if (regex.test(lowerText)) {
        foundSkills.add(skill);  // Add normalized skill name
      }
    });
  });

  return Array.from(foundSkills).sort();
}

module.exports = {
  extractSkillsFromText
};
