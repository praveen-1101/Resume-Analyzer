import { jsPDF } from 'jspdf';

export function generatePDF(results) {
  const doc = new jsPDF();
  let yPos = 20;
  const lineHeight = 10;

  // Title
  doc.setFontSize(16);
  doc.text('Resume Analysis Report', 20, yPos);
  yPos += lineHeight * 2;

  // Missing Skills
  if (results.missingSkills?.length > 0) {
    doc.setFontSize(14);
    doc.text('Missing Skills:', 20, yPos);
    yPos += lineHeight;
    
    doc.setFontSize(12);
    results.missingSkills.forEach(skill => {
      doc.text(`• ${skill}`, 30, yPos);
      yPos += lineHeight;
    });
    yPos += lineHeight;
  }

  // Job Summary
  if (results.jobSummary) {
    doc.setFontSize(14);
    doc.text('Job Summary:', 20, yPos);
    yPos += lineHeight;
    
    doc.setFontSize(12);
    const lines = doc.splitTextToSize(results.jobSummary, 170);
    lines.forEach(line => {
      doc.text(line, 20, yPos);
      yPos += lineHeight;
    });
  }

  doc.save('resume-analysis.pdf');
}