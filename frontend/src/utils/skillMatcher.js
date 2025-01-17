
   // Comprehensive skill mappings
const SKILL_MAPPINGS = {
  // Frontend Frameworks & Libraries
  'react': ['react', 'react.js', 'reactjs'],
  'angular': ['angular', 'angular.js', 'angularjs'],
  'vue': ['vue', 'vue.js', 'vuejs'],
  'next': ['next', 'next.js', 'nextjs'],
  'nuxt': ['nuxt', 'nuxt.js', 'nuxtjs'],
  'svelte': ['svelte', 'sveltejs', 'svelte.js'],
  
  // CSS Frameworks
  'tailwind': ['tailwind', 'tailwind css', 'tailwindcss'],
  'bootstrap': ['bootstrap', 'bootstrap css'],
  'sass': ['sass', 'scss'],
  
  // JavaScript
  'javascript': ['javascript', 'js', 'ecmascript'],
  'typescript': ['typescript', 'ts'],
  
  // Backend
  'node': ['node', 'node.js', 'nodejs'],
  'express': ['express', 'express.js', 'expressjs'],
  'nest': ['nest', 'nest.js', 'nestjs'],
  'django': ['django', 'django framework'],
  'flask': ['flask', 'flask framework'],
  
  // Databases
  'postgresql': ['postgresql', 'postgres', 'psql'],
  'mongodb': ['mongodb', 'mongo'],
  'mysql': ['mysql', 'my sql'],
  
  // Cloud & DevOps
  'aws': ['aws', 'amazon web services'],
  'azure': ['azure', 'microsoft azure'],
  'docker': ['docker', 'docker container'],
  'kubernetes': ['kubernetes', 'k8s'],
  'github actions': ['github actions', 'github workflow', 'gh actions'],
  'ci/cd': ['ci/cd', 'ci cd', 'continuous integration', 'continuous deployment'],
  
  // Testing
  'jest': ['jest', 'jest.js'],
  'cypress': ['cypress', 'cypress.io'],
  'selenium': ['selenium', 'selenium webdriver'],
  
  // Version Control
  'git': ['git', 'git scm'],
  
  // Package Managers
  'npm': ['npm', 'node package manager'],
  'yarn': ['yarn', 'yarn package manager'],
  
  // Build Tools
  'webpack': ['webpack', 'webpack.js'],
  'vite': ['vite', 'vitejs', 'vite.js'],
  'babel': ['babel', 'babeljs', 'babel.js']
};

// Create a reverse mapping for quick lookups
const SKILL_ALIASES = Object.entries(SKILL_MAPPINGS).reduce((acc, [main, aliases]) => {
  aliases.forEach(alias => {
    acc[alias.toLowerCase()] = main;
  });
  return acc;
}, {});

/**
 * Normalizes a skill name by removing special characters and converting to lowercase
 * @param {string} skill - The skill to normalize
 * @returns {string} - The normalized skill name
 */
function normalizeSkill(skill) {
  // Convert to lowercase and trim whitespace
  const normalized = skill.toLowerCase().trim();
  
  // Check if this skill has a canonical form
  return SKILL_ALIASES[normalized] || normalized;
}

/**
 * Matches skills between resume and job requirements
 * @param {string[]} resumeSkills - Array of skills from the resume
 * @param {string[]} jobSkills - Array of skills from the job description
 * @returns {Object} - Object containing matching skills, missing skills, and match rate
 */
export function matchSkills(resumeSkills, jobSkills) {
  // Normalize all skills
  const normalizedResumeSkills = new Set(resumeSkills.map(normalizeSkill));
  const normalizedJobSkills = jobSkills.map(normalizeSkill);

  // Find matching and missing skills
  const matching = normalizedJobSkills.filter(skill => 
    normalizedResumeSkills.has(skill)
  );

  const missing = normalizedJobSkills.filter(skill => 
    !normalizedResumeSkills.has(skill)
  );

  // Calculate match rate
  const matchRate = normalizedJobSkills.length ? 
    (matching.length / normalizedJobSkills.length) * 100 : 0;

  // Return results with canonical skill names
  return {
    matching: [...new Set(matching)],
    missing: [...new Set(missing)],
    matchRate: Math.round(matchRate * 10) / 10
  };
}

/**
 * Groups skills by category
 * @param {string[]} skills - Array of skills to categorize
 * @returns {Object} - Object with skills grouped by category
 */
export function categorizeSkills(skills) {
  const categories = {
    frontend: [],
    backend: [],
    database: [],
    devops: [],
    languages: [],
    testing: [],
    tools: [],
    other: []
  };

  const normalizedSkills = skills.map(normalizeSkill);

  normalizedSkills.forEach(skill => {
    // Add categorization logic here based on your needs
    // This is a simple example - expand based on your requirements
    if (['react', 'vue', 'angular', 'tailwind'].includes(skill)) {
      categories.frontend.push(skill);
    } 
    else if 
    (['node', 'express', 'django'].includes(skill)) 
    {
      categories.backend.push(skill);
    } 
    else if (['postgresql', 'mongodb', 'mysql'].includes(skill)) 
      {
      categories.database.push(skill);
    } 
    else if (['docker', 'kubernetes', 'aws'].includes(skill)) 
      {
      categories.devops.push(skill);
    } 
    else if (['javascript', 'typescript', 'python'].includes(skill)) 
      {
      categories.languages.push(skill);
    } 
    else if (['jest', 'cypress', 'selenium'].includes(skill)) 
      {
      categories.testing.push(skill);
    } 
    else if (['git', 'webpack', 'vite'].includes(skill)) 
      {
      categories.tools.push(skill);
    } 
    else 
    {
      categories.other.push(skill);
    }
  });

  return Object.fromEntries(
    Object.entries(categories).filter(([_, skills]) => skills.length > 0)
  );
}