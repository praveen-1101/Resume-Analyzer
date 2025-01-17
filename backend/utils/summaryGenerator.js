function generateSummary(jobDescription) {
  // Simple summary generation - extract first 200 characters
  // In a production environment, you'd want to use more sophisticated NLP
  const summary = jobDescription
    .split('\n')
    .filter(line => line.trim())
    .slice(0, 3)
    .join(' ');

  return summary.length > 200 
    ? summary.substring(0, 200) + '...'
    : summary;
}

module.exports = {
  generateSummary
};