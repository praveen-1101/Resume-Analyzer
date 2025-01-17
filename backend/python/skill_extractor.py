import spacy
import json
import sys
from typing import List, Dict
import re

# Load English language model
nlp = spacy.load("en_core_web_sm")

# Comprehensive skill mappings for normalization
SKILL_MAPPINGS = {
    # Programming Languages
    "javascript": ["javascript", "js", "ecmascript"],
    "typescript": ["typescript", "ts"],
    "python": ["python", "py"],
    "java": ["java"],  # Separate from JavaScript
    
    # Frontend
    "react": ["react", "react.js", "reactjs"],
    "angular": ["angular", "angular.js", "angularjs"],
    "vue": ["vue", "vue.js", "vuejs"],
    "next": ["next", "next.js", "nextjs"],
    "tailwind": ["tailwind", "tailwind css", "tailwindcss"],
    "html": ["html", "html5"],
    "css": ["css", "css3"],
    
    # Backend
    "node": ["node", "node.js", "nodejs"],
    "express": ["express", "express.js", "expressjs"],
    "django": ["django"],
    "flask": ["flask"],
    
    # Databases
    "postgresql": ["postgresql", "postgres", "psql"],
    "mongodb": ["mongodb", "mongo"],
    
    # State Management
    "redux": ["redux", "react-redux"],
    
    # APIs
    "graphql": ["graphql", "graph-ql"],
    "rest api": ["rest api", "restful api", "rest", "api"],
    
    # Version Control
    "git": ["git", "github"],
    
    # Testing
    "jest": ["jest"],
    "cypress": ["cypress"],
    
    # DevOps
    "ci/cd": ["ci/cd", "continuous integration", "continuous delivery"],
    "docker": ["docker", "containerization"],
    
    # Methodologies
    "agile": ["agile", "scrum", "kanban"]
}

def normalize_skill(skill: str) -> str:
    """
    Normalize skill name using mappings
    Returns the canonical form of the skill
    """
    skill_lower = skill.lower().strip()
    
    # Check exact matches first
    for main_skill, aliases in SKILL_MAPPINGS.items():
        if skill_lower == main_skill or skill_lower in aliases:
            return main_skill
            
    # If no exact match found, return the lowercase, trimmed version
    return skill_lower

def extract_matching_and_missing_skills(job_skills: List[str], resume_skills: List[str]) -> Dict[str, List[str]]:
    """
    Identify matching and missing skills between job description and resume
    Uses exact matching with normalization to avoid false positives
    """
    if not job_skills or not resume_skills:
        return 
        {
            "matching_skills": [],
            "missing_skills": []
        }
    
    # Normalize both job and resume skills
    normalized_job_skills = {normalize_skill(skill) for skill in job_skills}
    normalized_resume_skills = {normalize_skill(skill) for skill in resume_skills}
    
    # Calculate matching and missing skills
    matching_skills = sorted(list(normalized_job_skills & normalized_resume_skills))
    missing_skills = sorted(list(normalized_job_skills - normalized_resume_skills))
    
    return {
        "matching_skills": matching_skills,
        "missing_skills": missing_skills
    }

def main():
    try:
        # Read input from stdin
        input_text = sys.stdin.read().strip()
        if not input_text:
            print(json.dumps({"error": "No input received"}))
            return

        # Parse input JSON
        try:
            input_data = json.loads(input_text)
        except json.JSONDecodeError:
            print(json.dumps({"error": "Invalid JSON input"}))
            return

        if not isinstance(input_data, dict):
            print(json.dumps({"error": "Input must be a JSON object"}))
            return

        # Extract skills lists
        job_skills = input_data.get("job_skills", [])
        resume_skills = input_data.get("resume_skills", [])

        # Process skills
        result = extract_matching_and_missing_skills(job_skills, resume_skills)
        print(json.dumps(result))

    except Exception as e:
        print(json.dumps({"error": str(e)}))

    sys.stdout.flush()

if __name__ == "__main__":
    main()