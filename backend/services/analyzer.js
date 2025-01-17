import { skillCategories } from './skillsData.js';

// Flatten all skills into a single array
const allSkills = Object.values(skillCategories).flat();

function normalizeText(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
}

function extractSkills(text) {
  const normalizedText = normalizeText(text);
  const words = normalizedText.split(/\s+/);
  const foundSkills = new Set();

  // Check for single-word skills
  words.forEach(word => {
    if (allSkills.includes(word)) {
      foundSkills.add(word);
    }
  });

  // Check for multi-word skills
  allSkills.forEach(skill => {
    if (skill.includes(' ') && normalizedText.includes(skill)) {
      foundSkills.add(skill);
    }
  });

  return Array.from(foundSkills);
}

function findMissingSkills(jobSkills, resumeSkills) {
  return jobSkills.filter(skill => !resumeSkills.includes(skill));
}

function categorizeSkills(skills) {
  const categorized = {};
  
  for (const [category, categorySkills] of Object.entries(skillCategories)) {
    const matchedSkills = skills.filter(skill => categorySkills.includes(skill));
    if (matchedSkills.length > 0) {
      categorized[category] = matchedSkills;
    }
  }
  
  return categorized;
}

function generateSuggestions(missingSkills, jobDescription) {
  const categorizedSkills = categorizeSkills(missingSkills);
  const suggestions = [];

  for (const [category, skills] of Object.entries(categorizedSkills)) {
    if (skills.length > 0) {
      suggestions.push(
        `Consider adding ${category} skills: ${skills.join(', ')}`
      );
    }
  }

  // Add specific suggestions based on the job description context
  if (jobDescription.toLowerCase().includes('senior') || jobDescription.toLowerCase().includes('lead')) {
    suggestions.push('Highlight leadership experience and project management skills');
  }

  return suggestions;
}

function generateSummary(jobDescription, missingSkills) {
  const categorizedSkills = categorizeSkills(missingSkills);
  let summary = 'Key Requirements:\n';

  for (const [category, skills] of Object.entries(categorizedSkills)) {
    if (skills.length > 0) {
      summary += `\n${category.charAt(0).toUpperCase() + category.slice(1)}:\n`;
      skills.forEach(skill => {
        summary += `- ${skill}\n`;
      });
    }
  }

  summary += '\nRecommendations:\n';
  summary += '- Add these missing skills to your resume if you have experience with them\n';
  summary += '- Consider gaining experience in these areas to better match the job requirements\n';
  summary += '- Highlight any related or transferable skills you may have';

  return summary;
}

export async function analyzeResume(resumeText, jobDescription) {
  // Extract skills from both texts
  const resumeSkills = extractSkills(resumeText);
  const jobSkills = extractSkills(jobDescription);

  // Find missing skills
  const unmatchedSkills = findMissingSkills(jobSkills, resumeSkills);

  // Generate suggestions and summary
  const suggestions = generateSuggestions(unmatchedSkills, jobDescription);
  const summary = generateSummary(jobDescription, unmatchedSkills);

  return {
    unmatchedSkills,
    suggestions,
    summary,
    foundSkills: resumeSkills // Adding found skills for reference
  };
}