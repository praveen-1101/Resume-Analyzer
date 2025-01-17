import { Router } from 'express';
import { upload } from '../middleware/upload.js';
import { analyzeResume } from '../services/analyzer.js';
import { extractTextFromPDF } from '../services/pdfExtractor.js';

const router = Router();

router.post('/', upload.single('resume'), async (req, res, next) => {
  try {
    const { jobDescription } = req.body;
    const resumeBuffer = req.file.buffer;

    const resumeText = await extractTextFromPDF(resumeBuffer);
    const analysis = await analyzeResume(resumeText, jobDescription);

    res.json(analysis);
  } catch (error) {
    next(error);
  }
});

export default router;