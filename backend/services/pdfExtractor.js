const pdfParse = require('pdf-parse');

class PDFExtractor {
  async extractText(buffer) {
    try {
      const data = await pdfParse(buffer);
      return data.text;
    } catch (error) {
      throw new Error(`PDF extraction failed: ${error.message}`);
    }
  }
}

module.exports = new PDFExtractor();