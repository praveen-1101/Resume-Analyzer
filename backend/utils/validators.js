function validateRequest(req) {
    if (!req.file) {
      return { 
        error: true, 
        message: 'No resume file provided' 
      };
    }
  
    if (!req.body.jobDescription) {
      return { 
        error: true, 
        message: 'No job description provided' 
      };
    }
  
    return null;
  }
  
  module.exports = {
    validateRequest
  };