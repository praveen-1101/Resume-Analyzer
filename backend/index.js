const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const { PythonShell } = require('python-shell');
const { analyzeResume } = require('./controllers/analyzeController');

const app = express();
const PORT = process.env.PORT || 7000;

// Middleware
const corsOptions = 
{
  origin:['https://resume-analyzer-blue.vercel.app'],
  methods: ['GET', 'POST'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));


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
  }
});

// API Routes
app.post('/api/analyze', upload.single('resume'), analyzeResume);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: true, 
    message: err.message || 'An error occurred during processing' 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});