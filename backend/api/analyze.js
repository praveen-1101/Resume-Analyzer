const multer = require('multer');
const { analyzeResume } = require('../controllers/analyzeController');

// File upload configuration
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed!'));
    }
  },
});

// Export the serverless function
module.exports = (req, res) => {
  if (req.method === 'POST') {
    // Handle file upload with multer
    upload.single('resume')(req, res, (err) => {
      if (err) {
        res.status(400).json({ error: true, message: err.message });
      } else {
        analyzeResume(req, res);
      }
    });
  } else {
    res.status(405).json({ error: true, message: 'Method not allowed' });
  }
};
